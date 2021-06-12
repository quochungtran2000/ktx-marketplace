import React from "react";
import Layout from "../components/Layout/Layout";
import staticpageApi from "../api/staticpageApi";
import useFetch from "../hook/useFetch";

import CommingSoon from "../components/Layout/CommingSoon";
import Loading from '../components/Loading/Loading'
export default function News(props) {
  const { data: page, loading: pageLoading } = useFetch(
    staticpageApi.getByType,
    "NEWS"
  );

  function createMarkup(page) {
    return {
       __html: page?.content    };
 }; 

  return (
    <Layout title={page?.title}>
      <div className="container">
        { pageLoading && <Loading />}
        {!pageLoading &&
          (page ? (
            <div dangerouslySetInnerHTML={createMarkup(page)} />
          ) : (
            <CommingSoon />
          ))}
      </div>
    </Layout>
  );
}
