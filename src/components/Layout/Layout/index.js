import Header from '../Header'
import Footer from '../Footer'
const Layout = (props) => {
  const test1 = [
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
    { class: 'fa fa-user', name: 'Nhà cửa đát đai'},
    { class: 'fa fa-school', name: 'Trường học'},
  ]

  const test2 = [
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
    { imageUrl: 'https://picsum.photos/seed/picsum/70/70', location: 'Ktx khu A', name: 'Post title ádasdasdasd', moment: '1 phút trước', view: 32},
  ]
  return <>
    <Header/>
    <div style={{minHeight: '35vh'}}>
      <div className="container">
        <div className="row mt-2">
          <div className="col-9">
            <div className="w-100">
              <h3 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
                <i className="far fa-newspaper" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
                Tin rao theo chuyên mục
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',marginTop: '1rem'}}>
              {
                test1.map(i => {
                  return (
                    <div style={{textAlign: 'center', padding: '20px'}}>
                      <i style={{fontSize: '2rem'}} className={i.class}></i>
                      <p>{i.name}</p>
                    </div>
                  )
                })
              }
              </div>
            </div> 
          </div>
          <div className="col-3">
            <h3 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
              <i className="fas fa-map-marker-alt" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
              Khu vực
            </h3>
            <div className="mt-4">
              <p>KTX khu A</p>
              <p>KTX khu B</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-2">
          <div className="w-100">
            <h3 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
              <i className="far fa-newspaper" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
              Tin rao vặt hằng ngày
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',marginTop: '1rem'}}>
              {
                test2.map( i => {
                  return (
                    <div style={{display: 'flex', margin: '0.5rem 0'}}>
                      <div style={{marginRight: '1rem'}}>
                        <img src={i.imageUrl} alt={i.name}></img>
                      </div>
                      <div>
                        <a style={{textDecoration: 'none', fontWeight: 'bold', color: 'black'}} href="/">Post title ádasdasdasd</a>
                        <p style={{margin: '0'}}><span style={{marginRight: '0.5rem'}}><i class="fas fa-map-marker-alt"></i></span>{i.location}</p>
                        <p style={{margin: '0'}}>
                          <span style={{marginRight: '0.5rem'}}><i class="far fa-clock"></i>{i.moment}</span>
                          <span style={{margin: '0 0.5rem'}}><i class="far fa-eye"></i>{i.view}</span>
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
      <div className="container">
        <div className="row mt-2">
          <div className="w-100">
            <h3 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
              <i className="far fa-newspaper" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
              Tin tại Ktx khu A
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',marginTop: '1rem'}}>
              {
                test2.map( i => {
                  return (
                    <div style={{display: 'flex', margin: '0.5rem 0'}}>
                      <div style={{marginRight: '1rem'}}>
                        <img src={i.imageUrl} alt={i.name}></img>
                      </div>
                      <div>
                        <a style={{textDecoration: 'none', fontWeight: 'bold', color: 'black'}} href="/">Post title ádasdasdasd</a>
                        <p style={{margin: '0'}}><span style={{marginRight: '0.5rem'}}><i class="fas fa-map-marker-alt"></i></span>{i.location}</p>
                        <p style={{margin: '0'}}>
                          <span style={{marginRight: '0.5rem'}}><i class="far fa-clock"></i>{i.moment}</span>
                          <span style={{margin: '0 0.5rem'}}><i class="far fa-eye"></i>{i.view}</span>
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
      {/* <div className="container">
        <div className="row mt-2">
          <div className="w-100">
            <h3 className="d-inline" style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.5rem',marginBottom: '1rem'}}>
              <i className="far fa-newspaper" style={{fontSize: '1.7rem', marginRight: '1rem'}}></i>
              Tin tại KTX  khu B
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',marginTop: '1rem'}}>
              {
                [...test2].map( i => {
                  i.location = 'KTX khu B'
                  return (
                    <div style={{display: 'flex', margin: '0.5rem 0'}}>
                      <div style={{marginRight: '1rem'}}>
                        <img src={i.imageUrl} alt={i.name}></img>
                      </div>
                      <div>
                        <a style={{textDecoration: 'none', fontWeight: 'bold', color: 'black'}} href="/">Post title ádasdasdasd</a>
                        <p style={{margin: '0'}}><span style={{marginRight: '0.5rem'}}><i class="fas fa-map-marker-alt"></i></span>{i.location}</p>
                        <p style={{margin: '0'}}>
                          <span style={{marginRight: '0.5rem'}}><i class="far fa-clock"></i>{i.moment}</span>
                          <span style={{margin: '0 0.5rem'}}><i class="far fa-eye"></i>{i.view}</span>
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div> */}
      <div className="container mt-4">
        <h4 style={{textAlign: 'center'}}>TIN NHANH THEO CHUYÊN MỤC</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)',marginTop: '1rem'}}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <i style={{fontSize: '2rem'}} className="fa fa-school"></i>
                  <p>Danh mục n</p>
                </div>
              </div>
      </div>
      {props.children}
    </div>
    <Footer/>
  </>
}

export default Layout;