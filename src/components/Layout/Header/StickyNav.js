import React, { useState } from "react";
import LoginForm from "../../Form/LoginForm";
import RegisterForm from "../../Form/RegisterForm";
import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import noimage from "../../../assets/images/noimage.jpeg";
import { useUser } from "../../../contexts/userContext";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const StickyNav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoUrl = `https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png`;
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const { user, logout } = useUser();
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

          {user && (
            <>
            <li>
              <Link className="nav__link" to="/createPost" >
                Đăng bài
              </Link>
            </li>
            </>
          )}
        </ul>
      </nav>
      {user ? (
        <div
          style={{ borderRadius: "25px", backgroundColor: "#d5d5d5" }}
          className="d-flex align-items-center"
        >
          <Avatar
            style={{ marginRight: "1rem" }}
            alt={user?.name}
            src={user?.img_url || noimage}
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <strong
            style={{ marginRight: "1rem", textTransform: "capitalize" }}
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {user?.name}
          </strong>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}><Link to="/myaccount">Tài khoản</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/mypost">Bài viết</Link></MenuItem>
            <MenuItem
              onClick={logout}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <>
          <button
            onClick={() => onOpen.login()}
            className="nav__link header__signin"
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => onOpen.register()}
            className="nav__link header__signin"
          >
            Đăng Ký
          </button>
        </>
      )}

      <LoginForm open={loginOpen} onClose={onClose} />
      <RegisterForm
        open={registerOpen}
        onClose={onClose}
        openLoginForm={onOpen.login}
      />
    </header>
  );
};

export default StickyNav;
