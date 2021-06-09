import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import locationApi from "../api/locationApi";
import categoryApi from "../api/categoryApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";
import { useUser } from "../contexts/userContext";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import postApi from "../api/postApi";
import cloudinaryApi from "../api/cloudinaryApi";
import useFetch from "../hook/useFetch";
export default function CreatePost() {
  const { data: locationData, loading: locationLoading } = useFetch(
    locationApi.getAll,
    {}
  );
  const { data: categoryData, loading: categoryLoading } = useFetch(
    categoryApi.getAll,
    {}
  );
  const [cateSelect, setCateSelect] = useState(categoryData?.[0]?.category_id);
  const [locaSelect, setLocaSelect] = useState(locationData?.[0]?.location_id);
  const { user } = useUser();
  const editorRef = useRef(null);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    setCateSelect(+categoryData?.[0]?.category_id);
    setLocaSelect(+locationData?.[0]?.location_id);
  }, [categoryData, locationData]);

  const onSubmit = async (data) => {
    let img_url = '';
    if (data.file.length) {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("upload_preset", "ceh3abtd");
      const cloudinaryReponse = await cloudinaryApi.upload(formData);
      console.log(cloudinaryReponse);
      img_url = cloudinaryReponse?.data?.url;
    }
    const post = {
      ...data,
      img_url,
      content: editorRef?.current?.getContent(),
      price: +data?.price,
      location: {
        location_id: +data?.location || locaSelect,
      },
      category: {
        category_id: +data?.category || cateSelect,
      },
      user: {
        userid: user?.userid,
      },
    };
    console.log(post)

    await postApi.createPost(post);
    toast.success("Đăng bài thành công");
  };

  const settings = {
    height: 500,
    menubar: true,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste imagetools wordcount image code",
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link imageundo redo | image code",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  };
  return (
    <Layout title="Đăng bài">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Tiêu đề
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                {...register("title")}
                placeholder={"Nhập tiêu đề"}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="file" className="col-sm-2 col-form-label">
              Hình hiển thị
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="file"
                {...register("file")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Giá
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="price"
                {...register("price")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="location" className="col-sm-2 col-form-label">
              Địa điểm
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                placeholder="loading"
                id="location"
                {...register("location")}
              >
                {locationLoading && <option>Loading....</option>}
                {!locationLoading &&
                  locationData?.map((location) => (
                    <option
                      key={location.location_id}
                      value={location.location_id}
                    >
                      {location.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="category" className="col-sm-2 col-form-label">
              Danh mục
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                id="category"
                {...register("category")}
                defaultValue={cateSelect + ""}
              >
                {locationLoading && <option>Loading....</option>}
                {!categoryLoading &&
                  categoryData?.map((category, i) => (
                    <option
                      key={category?.category_id}
                      value={+category?.category_id}
                    >
                      {category?.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-4 row">
            <label htmlFor="content" className="col-sm-2 col-form-label">
              Nội dung
            </label>
            <div className="col-sm-10 text-center">
              <Editor
                id="content"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={``}
                init={settings}
                className="mb-4"
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                // className={classes.button}
                style={{ margin: "3rem 0" }}
                startIcon={<SaveIcon />}
                // onClick={onsubmit}
              >
                Save
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center"></div>
        </form>
      </div>
    </Layout>
  );
}
