import React from 'react';

import { Link } from 'react-router-dom';

const FooterArt = () => {
  return (
    <footer className="footer">
      <div className="footer__art">
        <div className="container">
          <div className="footer__content">
            <section className="footer__section">
              <header className="footer__header">Về Chúng Tôi</header>
              <Link className="footer__link" to="/">Giới thiệu</Link>
              <Link className="footer__link" to="/">Tuyển dụng</Link>
              <Link className="footer__link" to="/">Liên Hệ</Link>
              <Link className="footer__link" to="/">Tin tức</Link>
            </section>
            <section className="footer__section">
              <header className="footer__header">Hỗ trợ</header>
              <Link className="footer__link" to="/">Hướng dẫn đăng ký</Link>
              <Link className="footer__link" to="/">Hướng dẫn đăng bài</Link>
              <Link className="footer__link" to="/">Nội Quy</Link>
              <Link className="footer__link" to="/">Khiếu nại</Link>
            </section>
            <section className="footer__section">
              <header className="footer__header">Hỗ trợ</header>
              <Link className="footer__link" to="/">Hướng dẫn đăng ký</Link>
              <Link className="footer__link" to="/">Hướng dẫn đăng bài</Link>
              <Link className="footer__link" to="/">Nội Quy</Link>
              <Link className="footer__link" to="/">Khiếu nại</Link>
            </section>
            <section className="footer__section">
              <header className="footer__header">Đăng kí nhận tin</header>
              <form action="">
                <input className="newsletter__input newsletter__email" type="email" placeholder="email"></input>
                <input className="newsletter__input newsletter__submit"type="submit" value="Đăng ký"></input>
              </form>
              {/* <div className="footer__social">
                <i className="fab fa-youtube social__item"></i>
                <i className="fab fa-youtube social__item"></i>
                <i className="fab fa-youtube social__item"></i>
                <i className="fab fa-youtube social__item"></i>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterArt;
