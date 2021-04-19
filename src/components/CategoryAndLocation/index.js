import React from 'react'

export default function index(props) {
  const { category, location } = props;
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-9">
          <div className="w-100">
            <h5 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
              <i className="far fa-newspaper" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
              Tin rao theo chuyên mục
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',marginTop: '1rem'}}>
              {category && category?.map((cate, index) => (
                <div key={index} style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '1.1rem', paddingBottom: '1rem'}} className={cate.classes}></i>
                <p style={{fontSize: '0.9rem'}}>{cate.name}</p>
              </div>
              ))}
            </div>
          </div> 
        </div>
        <div className="col-3">
          <h5 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
            <i className="fas fa-map-marker-alt" style={{fontSize: '1.2rem', marginRight: '1rem'}}></i>
            Khu vực
          </h5>
          <div className="mt-4">
            {location && location.map((item, index) => <p key={index}>{item.name}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}
