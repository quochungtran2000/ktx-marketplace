import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getPrice, removeAccents } from "../assets/consts/function";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout/Layout";
import postApi from "../api/postApi";
// import useFetchQuery from "../hook/useFetchQuery";
// import { toast } from "react-toastify";
import ModalBase from "../components/Modal/ModalBase";
import { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useUser } from "../contexts/userContext";
import { useLoading } from "../contexts/loadingContext";
import useFetch from "../hook/useFetch";
import noimage from '../assets/images/noimage.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    padding: "2rem",
  },
  table: {
    minWidth: 650,
    maxWidth: "100%",
  },
  tableCell: {
    overflow: "hidden",
  },
  cell: {
    maxWidth: 200,
    overflow: "hidden",
    display: "-webkit-box",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  deleteIcon: {
    color: "red",
    transition: "0.3s linear",
    "&::hover": {
      transform: "scale(1.2)",
    },
  },
  buttonGroups: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function MyPost(props) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState();
  const { user } = useUser();
  const {
    data: postData,
    loading: postDataLoading,
    reload,
  } = useFetch(postApi.getByUser, { user: user?.userid });

  const { setLoading } = useLoading();
  console.log(user);
  console.log(postData, postDataLoading);
  const onClose = () => {
    setOpen(false);
  };
  const onDeleteClick = async (id) => {
    setOpen(false);
    setLoading(true);
    await postApi.deleteById(id);
    reload();
    setLoading(false);
  };

  console.log(`select`, select);

  const classes = useStyles();
  return (
    <Layout title="Bài đăng của tôi">
      <div className="container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell colSpan="1" align="left">
                  Image
                </TableCell>
                <TableCell colSpan="2" align="left">
                  Title
                </TableCell>
                <TableCell colSpan="2" align="left">
                  category
                </TableCell>
                <TableCell colSpan="2" align="left">
                  Location
                </TableCell>
                <TableCell colSpan="2" align="left">
                  Price
                </TableCell>
                <TableCell colSpan="2" align="left">
                  content
                </TableCell>
                <TableCell colSpan="1" align="center">
                  update
                </TableCell>
                <TableCell colSpan="1" align="center">
                  delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postData?.post?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell colSpan="1" align="left">
                  <img  src={row?.img_url || noimage} alt={row?.title} style={{width: '50px'}} />
                </TableCell>
                  <TableCell
                    colSpan="2"
                    // scope="row"
                    className={classes.tableCell}
                  >
                    <span className={classes.cell}>{row?.title}</span>
                  </TableCell>
                  <TableCell colSpan="2" size="small" align="left">
                    <span className={classes.cell}>{row?.category?.name}</span>
                  </TableCell>
                  <TableCell colSpan="2" align="left">
                    <span className={classes.cell}>{row?.location?.name}</span>
                  </TableCell>
                  <TableCell colSpan="2" align="left">
                    <span className={classes.cell}>{getPrice(row?.price)}</span>
                  </TableCell>
                  <TableCell colSpan="2" align="left">
                    <span className={classes.cell}>{row?.content}</span>
                  </TableCell>
                  <TableCell colSpan="1" align="center">
                    <span className={classes.cell}>
                      <Link
                        to={`/update/${removeAccents(row?.title, row?.id)}`}
                      >
                        <i className="fa fa-edit"></i>
                      </Link>
                    </span>
                  </TableCell>
                  <TableCell colSpan="1" align="center">
                    <span className={classes.cell}>
                      <i
                        className={`${classes.deleteIcon} fa fa-trash`}
                        onClick={() => {
                          setSelect(row?.id);
                          setOpen(true);
                        }}
                      ></i>
                    </span>
                    <ModalBase open={open} onClose={onClose}>
                      <div className={classes.root}>
                        <Alert severity="warning">
                          <AlertTitle>Cảnh báo</AlertTitle>
                          Bài viết sẽ biến mất nếu bạn thực hiện thao tác này
                        </Alert>
                        <div className={classes.buttonGroups}>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={() => onDeleteClick(select)}
                          >
                            Xoá bài viết
                          </Button>
                          <Button
                            onClick={onClose}
                            variant="contained"
                            color="default"
                            startIcon={<CancelIcon />}
                          >
                            Huỷ
                          </Button>
                        </div>
                      </div>
                    </ModalBase>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* <div className="container">

        <div className="row">
          <div className="col-4">
            <Link to="/myaccount">Thông tin tài khoản</Link>
            <Link to="/mypost">Bài đăng của tôi</Link>
          </div>
          <div className="col-8">
            <div>ádasd</div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
