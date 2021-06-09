import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import CustomPagination from "../components/CustomPagination/CustomPagination";
import postApi from "../api/postApi";
import PostCard from "../components/PostCard/PostCard";
import LoadingPostCard from "../components/Loading/LoadingPostCard";
import { useLocation } from "react-router";
import queryString from 'query-string';
export default function Post() {
  const [data, setdata ] = useState({})
  const [loading, setLoading ] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const postData = await postApi.getAll(queryString.parse(location?.search?.replace('?','')));
      setdata(postData);
      setLoading(false);
    }
    fetchData();
  }, [location?.search])

  return (
    <Layout title="Post">
      <div className="container">
        {loading ? (
          <LoadingPostCard />
        ) : (
          <div className="grid-layout">
            {data?.post?.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
        )}
        <CustomPagination totalPages={data?.totalPages} />
      </div>
    </Layout>
  );
}
