import React from "react";
import Layout from "../components/Layout/Layout";
import CommingSoon from "../components/Layout/CommingSoon";
import Loading from '../components/Loading/Loading'

import staticpageApi from "../api/staticpageApi";
import useFetch from "../hook/useFetch";

export default function Communicate() {
  const { data: page, loading: pageLoading } = useFetch(
    staticpageApi.getByType,
    "communicate"
  );

  function createMarkup(page) {
    return {
      __html: page?.content,
    };
  }

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
