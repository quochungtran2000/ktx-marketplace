import React from "react";
import Layout from "../components/Layout/Layout";

import { useForm } from "react-hook-form";
import { useUser } from "../contexts/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import noimage from "../assets/images/noimage.jpeg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  button:{
    margin: '3rem 0'
  }
}));
export default function MyAccount() {
  const classes = useStyles();

  const { user } = useUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(user);
  return (
    <Layout title="Tài khoản của tôi">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.root}>
            <Avatar
              classes={{ root: classes.avatar }}
              alt={user?.name}
              src={user?.img_url || noimage}
            />
          </div>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Họ và tên
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={user?.name}
                {...register("name")}
                placeholder={"Họ và tên"}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                defaultValue={user?.email}
                type="text"
                className="form-control"
                id="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Số điện thoại
            </label>
            <div className="col-sm-10">
              <input
                defaultValue={user?.phone}
                type="text"
                className="form-control"
                id="phone"
                {...register("phone")}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="age" className="col-sm-2 col-form-label">
              Tuổi
            </label>
            <div className="col-sm-10">
              <input
                defaultValue={user?.age}
                type="text"
                className="form-control"
                id="age"
                {...register("age")}
              />
            </div>
          </div>

          <div className="mb-3 row d-flex">
            <div className="col-12 text-center">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
