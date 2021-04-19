import React from 'react';

const FooterArt = () => {
  return (
    <footer className="footer">
      <div className="footer__art">
        <div className="footer__content">
          <section className="footer__section">
            <header className="footer__header">Về Chúng Tôi</header>
            <a className="footer__link" href="/">Giới thiệu</a>
            <a className="footer__link" href="/">Tuyển dụng</a>
            <a className="footer__link" href="/">Liên Hệ</a>
            <a className="footer__link" href="/">Tin tức</a>
          </section>
          <section className="footer__section">
            <header className="footer__header">Hỗ trợ</header>
            <a className="footer__link" href="/">Hướng dẫn đăng ký</a>
            <a className="footer__link" href="/">Hướng dẫn đăng bài</a>
            <a className="footer__link" href="/">Nội Quy</a>
            <a className="footer__link" href="/">Khiếu nại</a>
          </section>
          <section className="footer__section">
            <header className="footer__header">Đăng kí nhận tin</header>
            <form action="">
              <input className="newsletter__input newsletter__email" type="email" placeholder="email"></input>
              <input className="newsletter__input newsletter__submit"type="submit" value="Đăng ký"></input>
            </form>
            <div className="footer__social">
              <i className="fab fa-youtube social__item"></i>
              <i className="fab fa-youtube social__item"></i>
              <i className="fab fa-youtube social__item"></i>
              <i className="fab fa-youtube social__item"></i>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default FooterArt;
