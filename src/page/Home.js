import React from 'react';
import Layout from '../components/Layout/Layout';
import CustomSlider from '../components/Slider/Slider';
import NewsWithTitle from '../components/NewsWithTitle';
import CategoryAndLocation from '../components/CategoryAndLocation';
import NewsWithCategory from '../components/NewsWithCategory';
// import { PostMockData } from '../mockData/PostMockData';
import { BannerMockData } from '../mockData/BannerMockData';
import bannerApi from '../api/bannerApi';
import locationApi from '../api/locationApi';
import categoryApi from '../api/categoryApi';
import postApi from '../api/postApi';
import useFetchData from "../hook/useFetchData";

export default function Home() {
  const [bannerData, bannerLoading] = useFetchData(bannerApi.getAll,{},{});
  const [postData] = useFetchData(postApi.getAll,{},{});
  const [postHcm] = useFetchData(postApi.getAll, { location : 3},{});
  const [locationData] = useFetchData(locationApi.getAll,{},{});
  const [categoryData] = useFetchData(categoryApi.getAll,{},{});

  return (
    <Layout>
      <CustomSlider data={ bannerData ||BannerMockData } loading={bannerLoading} />
      <CategoryAndLocation category={categoryData} location={locationData} />
      <NewsWithTitle title={`Tin rao vặt hằng ngày`} data={postData} /> 
      <NewsWithTitle title={`Tin rao vặt tại TP. HCM`} data={postHcm} />
      <NewsWithCategory data={categoryData} />
    </Layout>
  )
}
