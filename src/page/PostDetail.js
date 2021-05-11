import React from "react";
import Layout from '../components/Layout/Layout'
import { useParams } from "react-router-dom";
import { getId, createMarkup } from "../assets/consts/function";
import postApi from "../api/postApi";
import useFetchData from "../hook/useFetchData";

export default function PostDetail() {
  const { slug } = useParams();
  const [data, loading] = useFetchData(postApi.getById, +getId(slug), '');

  return (
    <Layout>
      <div>
        {loading ? (
          "loading..."
        ) : (
          <p dangerouslySetInnerHTML={createMarkup(data?.content)}></p>
        )}
      </div>
    </Layout>
  );
}