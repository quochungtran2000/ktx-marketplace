import React, { } from 'react';
import { Link } from 'react-router-dom'
const StickyNav = () => {
  const logoUrl = `https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png`
  return (
    <header className="header">

      <Link className="header__logo" to="/">
        <img src={logoUrl} alt="ktx-marketplace-logo" width={70} />
      </Link>
      <nav className="header__nav">
        <ul className="nav__links">
          <li>
            {/* <Link to={"/"}><a href="/">ád</a></Link> */}
            <Link className="nav__link" to="/">Trang chủ</Link>
          </li>
          <li>
            <Link className="nav__link" to="/news">Tin Tức</Link>
          </li>
          <li>
            <Link className="nav__link" to="/communicate">Cộng Đồng</Link>
          </li>
          <li>
            <Link className="nav__link" to="/contact">Liên Hệ G</Link>
          </li>

        </ul>
      </nav>
      <button className="nav__link header__signin">Đăng Nhập</button>
    </header>
  );
}

export default StickyNav;
