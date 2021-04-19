import React from 'react'

export default function index(props) {
  const { data } = props;
  return (
    <div className="container mt-4">
      <h5 style={{textAlign: 'center'}}>TIN NHANH THEO CHUYÊN MỤC</h5>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)',marginTop: '1rem'}}>
        {data && data.map((cate, index) => (
          <div key={index} style={{textAlign: 'center', padding: '20px'}}>
            <i style={{fontSize: '1.1rem', paddingBottom: '1rem'}} className={cate.classes}></i>
          <p style={{fontSize: '0.9rem', fontWeight: 500}}>{cate.name}</p>
        </div>
        ))}
      </div>
    </div>
  )
}
