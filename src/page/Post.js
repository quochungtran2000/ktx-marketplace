import React from "react";
import Layout from "../components/Layout/Layout";
import CustomPagination from "../components/CustomPagination/CustomPagination";
import postApi from "../api/postApi";
import useQueryLocation from "../hook/useQueryLocation";
import useFetchQuery from "../hook/useFetchQuery";
import PostCard from "../components/PostCard/PostCard";
import LoadingPostCard from "../components/Loading/LoadingPostCard";
export default function Post() {
  const { query } = useQueryLocation();
  const { data: postData, loading: postloading } = useFetchQuery(
    postApi.getAll,
    query
  );

  return (
    <Layout title="Post">
      <div className="container">
        {postloading ? (
          <LoadingPostCard />
        ) : (
          <div className="grid-layout">
            {postData?.post?.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
        )}
        <CustomPagination totalPages={postData?.totalPages} />
      </div>
    </Layout>
  );
}
