import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props) => {
  const { title } = props;
  return <>
    <Header/>
    <div style={{minHeight: '50vh', display: 'flex', flexDirection: 'column'}}>
      {title && <h3 className="text-center mt-4 mb-4">{title}</h3>}
      {props.children}
    </div>
    <Footer/>
  </>
}

export default Layout;