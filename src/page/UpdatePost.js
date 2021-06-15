import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";
import locationApi from "../api/locationApi";
import useFetchQuery from "../hook/useFetchQuery";
import categoryApi from "../api/categoryApi";
import { useForm } from "react-hook-form";
// import Axios from "axios";
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";
import { useUser } from "../contexts/userContext";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import postApi from "../api/postApi";
import { useParams } from "react-router-dom";
import { getId } from "../assets/consts/function";
import useFetch from "../hook/useFetch";
import cloudinaryApi from "../api/cloudinaryApi";
export default function UpdatePost() {
  const { user } = useUser();

  const { slug } = useParams();
  console.log({ slug });
  const { data: post } = useFetch(
    postApi.getById,
    +getId(slug)
  );

  // console.log(post);
  // console.log(postLoading);

  const { data: locationData, loading: locationLoading } = useFetchQuery(
    locationApi.getAll,
    {}
  );
  const { data: categoryData, loading: categoryLoading } = useFetchQuery(
    categoryApi.getAll,
    {}
  );
  const editorRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(`data`, data);
    let img_url = post?.img_url;
    if(data.file[0]){
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append('upload_preset','ceh3abtd');
      const cloudinaryReponse = await cloudinaryApi.upload(formData)
      console.log(cloudinaryReponse)
      img_url = cloudinaryReponse.data.url;
    }
    const payload = {
      title: data?.title || post?.title,
      img_url,
      content: editorRef?.current?.getContent(),
      price: +data?.price || +post?.price,
      location: {
        location_id: +data?.location || +post?.location?.location_id,
      },
      category: {
        category_id: +data?.category || +post?.category?.category_id,
      },
      user: {
        userid: user?.userid,
      },
      id: post?.id,
    };
    console.log(`payload`, payload);
    const result =  await postApi.updatePost(payload);
    console.log(`result`, result)
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
                defaultValue={post?.title}
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
                defaultValue={post?.price}
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
                placeholder="loacing"
                id="location"
                {...register("location")}
              >
                {post?.location && (
                  <option value={post?.location?.location_id} defaultValue>
                    {post?.location?.name}
                  </option>
                )}
                {locationLoading && <option>Loading....</option>}
                {!locationLoading &&
                  locationData
                    ?.filter(
                      (x) => x.location_id !== post?.location?.location_id
                    )
                    .map((location) => (
                      <option
                        key={location?.location_id}
                        value={location?.location_id}
                      >
                        {location?.name}
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
              >
                {post?.category && (
                  <option value={post?.category?.category_id} defaultValue>
                    {post?.category?.name}
                  </option>
                )}
                {!categoryLoading &&
                  categoryData
                    ?.filter(
                      (x) => x.category_id !== post?.category?.category_id
                    )
                    .map((category) => (
                      <option
                        key={category?.category_id}
                        value={category?.category_id}
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
                initialValue={post?.content}
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
                onClick={onsubmit}
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
