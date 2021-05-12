import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import CommingSoon from '../components/Layout/CommingSoon'
import CustomPagination from '../components/CustomPagination/CustomPagination'
import postApi from '../api/postApi';
import useQueryLocation from '../hook/useQueryLocation'
export default function Post() {
  const { location } = useQueryLocation();
  const [ data, setData] = useState([])
  const [ loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      console.log(location)
      const postData = await postApi.getAll(location.search.replace('?',''))
      console.log(postData)
      setData(postData);
      setLoading(false);
    }
    fetchData()
    // eslint-disable-next-line
  },[location])

  return (
    <Layout title="Post">
      {
        loading ? <div>Loading. ....</div> : 
        (
          <>
          <div>{data?.post?.length}</div>
          {
            data?.post?.map((post,index) => {
              return (
                <div key={index}>
                  <p>{post?.title}</p>
                  <p>{post?.id}</p>
                  <p></p>
                </div>
              )
            })
          }
          </>
        )
      }
      <CommingSoon />
      <CustomPagination/>
    </Layout>
  )
}
