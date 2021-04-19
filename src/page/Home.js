import React, { useState, useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import CustomSlider from '../components/Slider/Slider';
import NewsWithTitle from '../components/NewsWithTitle';
import CategoryAndLocation from '../components/CategoryAndLocation';
import NewsWithCategory from '../components/NewsWithCategory';
import { PostMockData } from '../mockData/PostMockData';
import { BannerMockData } from '../mockData/BannerMockData';
import bannerApi from '../api/bannerApi';
import locationApi from '../api/locationApi';
import categoryApi from '../api/categoryApi';

export default function Home() {
  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerLoading, setBannerLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const bannerResponse = await bannerApi.getAll();
      const locationResponse = await locationApi.getAll();
      const categoryResponse = await categoryApi.getAll();
      console.log(`bannerResponse`, bannerResponse);
      console.log(`locationResponse`, locationResponse);
      console.log(`categoryResponse`, categoryResponse);
      setLocation(locationResponse);
      setCategory(categoryResponse);
      setBanner(bannerResponse);
      setBannerLoading(false);
      window.scrollTo(0, 0)
    }
    fetchData();
  }, [])


  return (
    <Layout>
      <CustomSlider data={ banner ||BannerMockData } loading={bannerLoading} />
      <CategoryAndLocation category={category} location={location} />
      <NewsWithTitle title={`Tin rao vặt hằng ngày`} data={PostMockData} />
      <NewsWithTitle title={`Tin rao vặt tại TP. HCM`} data={PostMockData} />
      <NewsWithCategory data={category} />
    </Layout>
  )
}
