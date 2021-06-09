import React from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getId, createMarkup } from "../assets/consts/function";
import '../assets/css/postdetail.css'
import postApi from "../api/postApi";
import useFetch from "../hook/useFetch";
import Avatar from "@material-ui/core/Avatar";
import { PostCard, RelatedPostCard } from "../components/PostCard";
import noimage from "../assets/images/noimage.jpeg";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { useUser } from "../contexts/userContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function PostDetail() {
  const { user } = useUser()
  console.log(user)
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: "ondemand",
    autoplaySpeed: 5000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const classes = useStyles();
  const { slug } = useParams();
  const { data: post, loading: postLoading } = useFetch(
    postApi.getById,
    +getId(slug)
  );
  console.log(post)
  const { data: postRelatedCategory, loading: postRelatedCategoryLoading } =
    useFetch(postApi.getAll, {
      category: post?.post?.category?.category_id,
      size: 3,
    });
  const { data: postRelatedLocation, loading: postRelatedLocationLoading } =
    useFetch(postApi.getAll, {
      location: post?.post?.location?.location_id,
      size: 9,
    });
  return (
    <Layout title={post?.title}>
      <div className="container post__detail">
        <div className="row">
          <div className="col-8">
            <img
              src={post?.img_url || noimage}
              className="img-fluid"
              alt={post?.title}
            />

            <div className="py-4">
              <h2>Chi tiet san pham</h2>
            </div>
            {postLoading ? (
              "loading..."
            ) : (
              <p dangerouslySetInnerHTML={createMarkup(post?.content)}></p>
            )}
          </div>

          <div className="col-4 mt-2">
            <div className="d-flex border-dark border border-start-0 border-end-0 p-4">
              <Avatar
                alt="Remy Sharp"
                src={post?.user?.img_url || noimage}
                className={classes.large}
              />
              <div className="d-flex flex-grow-1 flex-column mx-2">
                <h5>{post?.user?.name}</h5>
                <span>
                  <a href={`tel:${post?.user?.phone}`}>
                    <i style={{ marginRight: "1rem" }} className="fas fa-phone"></i>
                    {post?.user?.phone}
                  </a>
                </span>
              </div>
              <div>
                <button className="btn btn-primary">theo doi</button>
              </div>
            </div>
            <h2>Bai viet lien quan</h2>
            {postRelatedCategoryLoading
              ? "loading"
              : postRelatedCategory?.post?.map((data, index) => (
                  <RelatedPostCard key={index} post={data} />
                ))}
          </div>
        </div>
        <h4 className="my-4">CÓ THỂ BẠN CŨNG THÍCH</h4>
        <div className="related-post-slick">
          {postRelatedLocationLoading ? (
            "loading"
          ) : (
            <Slider {...settings}>
              {postRelatedLocation?.post?.map((data, index) => (
                <PostCard
                  post={data}
                  key={index}
                  style={{ margin: "0 1rem" }}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </Layout>
  );
}