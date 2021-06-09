import React from "react";
import Layout from "../components/Layout/Layout";
import CustomSlider from "../components/Slider/Slider";
import NewsWithTitle from "../components/NewsWithTitle";
import CategoryAndLocation from "../components/CategoryAndLocation";
import NewsWithCategory from "../components/NewsWithCategory";
import { BannerMockData } from "../mockData/BannerMockData";
import bannerApi from "../api/bannerApi";
import locationApi from "../api/locationApi";
import categoryApi from "../api/categoryApi";
import postApi from "../api/postApi";
import useFetch from "../hook/useFetch";
import useFetchQuery from "../hook/useFetchQuery";
// import useFetchQuery from "../hook/useFetchQuery";

export default function Home() {
  const { data: bannerData, loading: bannerLoading } = useFetch(
    bannerApi.getAll,
    { page: 1 }
  );
  const { data: postData, loading: postDataLoading } = useFetch(
    postApi.getAll,
    { size: 9 }
  );
  const { data: postHcm, loading: postHcmLoading } = useFetchQuery(postApi.getAll, {
    location: 3,
    size: 9,
  });
  const { data: locationData, loading: locationLoading } = useFetch(
    locationApi.getAll,
    {}
  );
  const { data: categoryData, loading: categoryLoading } = useFetch(
    categoryApi.getAll,
    {}
  );

  return (
    <Layout>
      <CustomSlider
        data={bannerData || BannerMockData}
        loading={bannerLoading}
      />
      <CategoryAndLocation
        category={categoryData}
        location={locationData}
        categoryLoading={categoryLoading}
        locationLoading={locationLoading}
      />
      <NewsWithTitle
        title={`Tin rao vặt hằng ngày`}
        data={postData}
        loading={postDataLoading}
      />
      <NewsWithTitle
        title={`Tin rao vặt tại TP. HCM`}
        data={postHcm}
        loading={postHcmLoading}
        url={"?location=3"}
      />
      <NewsWithCategory data={categoryData} />
    </Layout>
  );
}
