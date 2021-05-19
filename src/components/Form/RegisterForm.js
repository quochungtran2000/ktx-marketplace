import React from "react";
import ModalBase from "../../components/Modal/ModalBase";
import { useForm } from "react-hook-form";
import "../../assets/css/loginform.css";
import Axios from "axios";
import { toast } from "react-toastify";

export default function LoginForm(props) {
  const { open, onClose, openLoginForm } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append('upload_preset','ceh3abtd');
    const cloudinaryReponse = await Axios.post('https://api.cloudinary.com/v1_1/hunghamhoc/image/upload',formData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    const user = {...data, img_url: cloudinaryReponse?.data?.url}
    await Axios.post('https://ktx-be.herokuapp.com/user/createUser', user)
    toast.success('Đăng Ký thành công vui lòng đăng nhập');
    openLoginForm();
    onClose();
   
  };

  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">ĐĂNG KÝ</div>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form onSubmit={handleSubmit(onSubmit)} class="signup" enctype="multipart/form-data">
              <div class="field">
                <input {...register("name")} name="name" type="text" placeholder="Họ Và Tên" required />
              </div>
              <div class="field">
                <input {...register("email")} name="email" type="text" placeholder="Email" required />
              </div>
              <div class="field">
                <input {...register("phone")} name="phone" type="text" placeholder="Số điện thoại" required />
              </div>
              <div class="field">
                <input {...register("username")} name="username" type="text" placeholder="Tên Đăng Nhập" required />
              </div>
              <div class="field">
                <input {...register("password")} name="password" type="password" placeholder="Mật Khẩu" required />
              </div>
              <div class="field">
                <input
                {...register("confirmPassword")} name="confirmPassword"
                  type="password"
                  placeholder="Xác Nhận Mật Khẩu"
                  required
                />
              </div>
              <div class="field">
                <input {...register("age")} name="age" type="text" placeholder="Tuổi" required />
              </div>

              <div class="field">
                <input {...register("address")} name="address" type="text" placeholder="Địa chỉ" required />
              </div>
              <div class="field">
                <input {...register("file")} name="file" type="file" class="custom-file-input" />
              </div>

              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
