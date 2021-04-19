import React from 'react'

export default function index(props) {
  const { data } = props;
  return (
    <div className="container mt-4">
      <h4 style={{textAlign: 'center'}}>TIN NHANH THEO CHUYÊN MỤC</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)',marginTop: '1rem'}}>
        {data && data.map((cate, index) => (
          <div key={index} style={{textAlign: 'center', padding: '20px'}}>
            <i style={{fontSize: '2rem'}} className={cate.classes}></i>
          <p>{cate.name}</p>
        </div>
        ))}
      </div>
    </div>
  )
}
