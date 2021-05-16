import React from "react";
// import { removeAccents } from "../../assets/consts/function";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import LoadingPostCard from "../Loading/LoadingPostCard";
export default function index(props) {
  const { title, data, loading = false, url = '' } = props;

  const renderTitle = (title) => {
    return (
      <h5
        className="d-inline"
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <i
          className="far fa-newspaper"
          style={{ fontSize: "1.2rem", marginRight: "1rem" }}
        ></i>
        {title}
      </h5>
    );
  };

  return (
    <div className="container my-4">
      <div className="row mt-2">
        <div className="col-12">
          <div className="w-100">
            {loading ? (
              <Skeleton width="300px" height="30px" />
            ) : (
              renderTitle(title)
            )}
            {loading ? (
              <LoadingPostCard />
            ) : (
              <div className="grid-layout">
                {data?.post.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 text-center my-2">
          {loading ? (
            <Skeleton width="100px" height="30px" />
          ) : (
            <Link to={`/post${url}`}>
              {" "}
              <button className="btn btn-primary">read morre</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
