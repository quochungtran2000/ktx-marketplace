import React, { useState } from "react";
import LoginForm from "../../Form/LoginForm";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/userContext";
const StickyNav = () => {
  const logoUrl = `https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png`;
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const { user } = useUser();
  const onOpen = {
    login: () => {
      setLoginOpen(true);
      setRegisterOpen(false);
    },
    register: () => {
      setLoginOpen(false);
      setRegisterOpen(true);
    },
  };

  const onClose = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={logoUrl} alt="ktx-marketplace-logo" width={70} />
      </Link>
      <nav className="header__nav">
        <ul className="nav__links">
          <li>
            {/* <Link to={"/"}><a href="/">ád</a></Link> */}
            <Link className="nav__link" to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/news">
              Tin Tức
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/communicate">
              Cộng Đồng
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/contact">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
      {Object.keys(user).length !== 0 ? (
        <span>{user?.name}</span>
      ) : (
        <button
          onClick={() => onOpen.login()}
          className="nav__link header__signin"
        >
          Đăng Nhập
        </button>
      )}
      <LoginForm open={loginOpen} onClose={onClose} />
    </header>
  );
};

export default StickyNav;
