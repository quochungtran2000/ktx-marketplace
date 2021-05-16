import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../../assets/css/layout.css'

const Layout = (props) => {
  const { title } = props;
  return <>
    <Header/>
    {/* style={{minHeight: '50vh', display: 'flex', flexDirection: 'column'}} */}
    <div className="layout-content">
      {title && <h1 className="text-center mt-4 mb-4">{title}</h1>}
      {props.children}
    </div>
    <Footer/>
  </>
}

export default Layout;