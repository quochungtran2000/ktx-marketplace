import React from 'react';

const StickyNav = () => {
  const logoUrl = `https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png`
  return (
    <header className="header">
        <img className="header__logo" src={logoUrl} alt="ktx-marketplace-logo" width={70}/>
        <nav className="header__nav">
          <ul className="nav__links">
            <li>
              {/* <Link to={"/"}><a href="/">ád</a></Link> */}
              <a className="nav__link" href="/">Trang chủ</a>
            </li>
            <li>
              <a className="nav__link" href="/">Tin Tức</a>
            </li>
            <li>
              <a className="nav__link" href="/">Cộng Đồng</a>
            </li>
            <li>
              <a className="nav__link" href="/">Liên Hệ</a>
            </li>
          </ul>
        </nav>
        <button className="nav__link header__signin">Đăng Nhập</button>
      </header>
  );
}

export default StickyNav;
