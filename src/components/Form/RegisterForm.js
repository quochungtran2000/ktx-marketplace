import React from "react";
import ModalBase from "../../components/Modal/ModalBase";
import { useForm } from "react-hook-form";
import "../../assets/css/loginform.css";
import userApi from '../../api/userApi'
import cloudinaryApi from '../../api/cloudinaryApi'
import { useUser } from "../../contexts/userContext";

export default function LoginForm(props) {
  const { open, onClose, openLoginForm } = props;
   const { setToken } = useUser()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    let img_url = '';
    if(data.file[0]){
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append('upload_preset','ceh3abtd');
      const cloudinaryReponse = await cloudinaryApi.upload(formData)
      img_url = cloudinaryReponse?.data?.url;
    }
    const user = {...data, img_url}
    const {jwt} = await userApi.createUser(user)
    const token = `Bearer ${jwt}`
    localStorage.setItem('token',token)
    setToken(token)
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
            <form onSubmit={handleSubmit(onSubmit)} className="signup" encType="multipart/form-data">
              <div className="field">
                <input {...register("name")} name="name" type="text" placeholder="Họ Và Tên" required />
              </div>
              <div className="field">
                <input {...register("email")} name="email" type="text" placeholder="Email" required />
              </div>
              <div className="field">
                <input {...register("phone")} name="phone" type="text" placeholder="Số điện thoại" required />
              </div>
              <div className="field">
                <input {...register("username")} name="username" type="text" placeholder="Tên Đăng Nhập" required />
              </div>
              <div className="field">
                <input {...register("password")} name="password" type="password" placeholder="Mật Khẩu" required />
              </div>
              <div className="field">
                <input
                {...register("confirmPassword")} name="confirmPassword"
                  type="password"
                  placeholder="Xác Nhận Mật Khẩu"
                  required
                />
              </div>
              <div className="field">
                <input {...register("age")} name="age" type="text" placeholder="Tuổi" required />
              </div>

              <div className="field">
                <input {...register("address")} name="address" type="text" placeholder="Địa chỉ" required />
              </div>
              <div className="field">
                <input {...register("file")} name="file" type="file" className="custom-file-input" />
              </div>

              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
