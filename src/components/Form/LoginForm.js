import React from "react";
import ModalBase from "../../components/Modal/ModalBase";
import { useForm } from "react-hook-form";
import "../../assets/css/loginform.css"
import Axios from 'axios';
import { useUser } from '../../contexts/userContext';
import { toast } from "react-toastify";


export default function LoginForm(props) {
  const { open, onClose } = props;
  const { register, handleSubmit } = useForm();
  const { setToken } = useUser();
  const onSubmit = (data) => {
    Axios.post('https://ktx-be.herokuapp.com/authenticate', data)
    .then(({data}) => {
      const token = `Bearer ${data.jwt}`
      localStorage.setItem('token', token)
      setToken(token)
      onClose();
      toast.success('Đăng nhập thành công')
    })
    .catch(err => {
      console.log(err)
      toast.error('Sai tên đăng nhập hoặc mật khẩu');
    });
  } 

  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">ĐĂNG NHẬP</div>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form  onSubmit={handleSubmit(onSubmit)} className="login">
              <div className="field">
                <input {...register("username")} name="username" type="text" placeholder="Username" required />
              </div>
              <div className="field">
                <input {...register("password")} name="password" type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="/">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input className="login-submit" type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <span>Signup now</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
