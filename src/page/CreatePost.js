import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";
import locationApi from "../api/locationApi";
import useFetchQuery from "../hook/useFetchQuery";
import categoryApi from "../api/categoryApi";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";
import { useUser } from "../contexts/userContext";
export default function CreatePost() {
  const { user, token } = useUser();
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
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("upload_preset", "ceh3abtd");
    const cloudinaryReponse = await Axios.post(
      "https://api.cloudinary.com/v1_1/hunghamhoc/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const post = {
      ...data,
      img_url: cloudinaryReponse?.data?.url,
      content: editorRef?.current?.getContent(),
      price: +data?.price,
      location: {
        location_id: data?.location,
      },
      category: {
        category_id: data?.category,
      },
      user: {
        userid: user?.userid,
      },
    };
    await Axios.post("https://ktx-be.herokuapp.com/createPost", post, {
      headers: {
        Authorization: token,
      },
    });
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
                placeholder="loacing"
                id="location"
                {...register("location")}
              >
                {locationLoading && <option>Loading....</option>}
                {!locationLoading &&
                  locationData?.map((location) => (
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
                {!categoryLoading &&
                  categoryData?.map((category) => (
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
                initialValue={`<h2><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg" width="976" height="549" />Welcome To The Best Online HTML Web Editor!</h2><p>You can <strong>type your text</strong> directly in the editor or paste it from a Word Doc, PDF, Excel etc.</p><p>The <strong>visual editor</strong> on the right and the <strong>source editor</strong> on the left are linked together and the changes are reflected in the other one as you type!</p><table><tbody><tr><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Age</strong></td></tr><tr><td>John</td><td>Chicago</td><td>23</td></tr><tr><td>Lucy</td><td>Wisconsin</td><td>19</td></tr><tr><td>Amanda</td><td>Madison</td><td>22</td></tr></tbody></table><table><tbody><tr><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Age</strong></td></tr><tr><td>John</td><td>Chicago</td><td>23</td></tr><tr><td>Lucy</td><td>Wisconsin</td><td>19</td></tr><tr><td>Amanda</td><td>Madison</td><td>22</td></tr></tbody></table><table><tbody><tr><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Age</strong></td></tr><tr><td>John</td><td>Chicago</td><td>23</td></tr><tr><td>Lucy</td><td>Wisconsin</td><td>19</td></tr><tr><td>Amanda</td><td>Madison</td><td>22</td></tr></tbody></table><table><tbody><tr><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Age</strong></td></tr><tr><td>John</td><td>Chicago</td><td>23</td></tr><tr><td>Lucy</td><td>Wisconsin</td><td>19</td></tr><tr><td>Amanda</td><td>Madison</td><td>22</td></tr></tbody></table><table><tbody><tr><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Age</strong></td></tr><tr><td>John</td><td>Chicago</td><td>23</td></tr><tr><td>Lucy</td><td>Wisconsin</td><td>19</td></tr><tr><td>Amanda</td><td>Madison</td><td>22</td></tr></tbody></table><p>This is a table you can experiment with.</p><p>Lorem ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p><p>Eum facete intellegat ei, ut mazim melius usu. Has elit simul primis ne, regione minimum id cum. Sea deleniti dissentiet ea. Illud mollis moderatius ut per, at qui ubique populo. Eum ad cibo legimus, vim ei quidam fastidii.</p><p>Quo debet vivendo ex. Qui ut admodum senserit partiendo. Id adipiscing disputando eam, sea id magna pertinax concludaturque. Ex ignota epicurei quo, his ex doctus delenit fabellas, erat timeam cotidieque sit in. Vel eu soleat voluptatibus, cum cu exerci mediocritatem. Malis legere at per, has brute putant animal et, in consul utamur usu.</p<p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p><p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>`}
                init={settings}
                className="mb-4"
              />
              <button className="mt-4 btn btn-primary d-inline-block" onClick={onsubmit}>Đăng bài</button>
            </div>
          </div>
          <div className="mt-4 text-center">
            
          </div>
        </form>
      </div>
    </Layout>
  );
}
