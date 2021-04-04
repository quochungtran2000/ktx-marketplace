import React from 'react';

const FooterArt = () => {
  return (
    <footer className="footer">
      <div className="footer__art">
        <div className="footer__content">
          <section className="footer__section">
            <header className="footer__header">title1</header>
            <a className="footer__link" href="/">subtitle1</a>
            <a className="footer__link" href="/">subtitle2</a>
            <a className="footer__link" href="/">subtitle3</a>
            <a className="footer__link" href="/">subtitle4</a>
          </section>
          <section className="footer__section">
            <header className="footer__header">title1</header>
            <a className="footer__link" href="/">subtitle1</a>
            <a className="footer__link" href="/">subtitle2</a>
            <a className="footer__link" href="/">subtitle3</a>
            <a className="footer__link" href="/">subtitle4</a>
          </section>
          <section className="footer__section">
            <header className="footer__header">Newsletter</header>
            <form action="">
              <input className="newsletter__input newsletter__email" type="email" placeholder="email"></input>
              <input className="newsletter__input newsletter__submit"type="submit" value="Subcribe"></input>
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
