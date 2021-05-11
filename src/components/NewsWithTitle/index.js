import React from 'react'
import { removeAccents } from '../../assets/consts/function'

export default function index(props) {
  const { title, data } = props;
  return (
    <div className="container my-4">
      <div className="row mt-2">
        <div className="w-100">
          <h5 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
            <i className="far fa-newspaper" style={{fontSize: '1.2rem', marginRight: '1rem'}}></i>
            {title}
          </h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',marginTop: '1rem'}}>
            {
              data?.post.map( (i, index) => {
                return (
                  <div key={index} style={{display: 'flex', margin: '0.5rem 0'}}>
                    <div style={{marginRight: '1rem'}}>
                      <img src={i.imageUrl} alt={i.name}></img>
                    </div>
                    <div>
                      <a style={{textDecoration: 'none', fontWeight: '500', color: 'black'}} href={`/post/${removeAccents(i.title,i.id)}`}>{i.title}</a>
                      <p style={{margin: '0', opacity: 0.8}}><span style={{marginRight: '0.5rem'}}><i className="fas fa-map-marker-alt"></i></span>{i.location.name}</p>
                      <p style={{margin: '0', opacity: 0.8}}>
                        <span style={{marginRight: '0.5rem'}}><i className="far fa-clock"></i>{`${Math.floor(Math.random()*60)} phút trước`}</span>
                        <span><i className="far fa-eye" style={{margin: '0 0.5rem'}}></i>{Math.floor(Math.random()*10000)}</span>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
