import React, { useState, useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import CustomSlider from '../components/Slider/Slider';
import NewsWithTitle from '../components/NewsWithTitle';
import CategoryAndLocation from '../components/CategoryAndLocation';
import NewsWithCategory from '../components/NewsWithCategory';
import { PostMockData } from '../mockData/PostMockData';
import { BannerMockData } from '../mockData/BannerMockData';
import Axios from 'axios';

export default function Home() {
  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState([]);

  console.log(location)
  useEffect(() => {
    Axios.get('http://localhost:1708/location')
    .then((locations) => setLocation(locations.data));
    Axios.get('http://localhost:1708/category')
    .then((categories) => setCategory(categories.data));
    Axios.get('http://localhost:1708/banner')
    .then((banner) => setCategory(banner.data));
  }, [setLocation, setCategory, setBanner])

  console.log(`banner`, banner);
  console.log(`category`, category);
  console.log(`location`, location);

  return (
    <Layout>
      <CustomSlider data={BannerMockData} />
      <CategoryAndLocation category={category} location={location} />
      <NewsWithTitle title={`Tin rao vặt hằng ngày`} data={PostMockData} />
      <NewsWithTitle title={`Tin rao vặt tại TP. HCM`} data={PostMockData} />
      <NewsWithCategory data={category} />
    </Layout>
  )
}
