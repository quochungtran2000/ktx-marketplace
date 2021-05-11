import React from 'react'
import { Link } from 'react-router-dom';

export default function index(props) {
  const { data } = props;
  return (
    <div className="container my-4">
      <h5 style={{textAlign: 'center'}}>TIN NHANH THEO CHUYÊN MỤC</h5>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)',marginTop: '1rem'}}>
        {data && data.map((cate, index) => (
          <Link to={`/post?category=${cate.category_id}`} key={index} style={{textAlign: 'center', padding: '20px'}}>
            <i style={{fontSize: '1.1rem', paddingBottom: '1rem'}} className={cate.classes}></i>
          <p style={{fontSize: '0.9rem', fontWeight: 500}}>{cate.name}</p>
        </Link>
        ))}
      </div>
    </div>
  )
}
