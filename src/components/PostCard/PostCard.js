import React from "react";
import "../../assets/css/postcard.css";
import { removeAccents } from "../../assets/consts/function";
import noimage from "../../assets/images/noimage.jpeg";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { post, decription = false } = props;
  const {
    user: { phone, email },
  } = post;
  return (
    <figure className="post">
      <div className="post__hero">
        <div className="post__image">
          <div
            className="post__img"
            style={{ backgroundImage: `url(${post?.img_url || noimage})` }}
          ></div>
        </div>
        {decription && (
          <div className="post__middle">
            <p className="post__middle-text">{`${post?.price?.toLocaleString('de-DE')} đ`}</p>
          </div>
        )}
      </div>
      <div className="post__content">
        <div className="post__info">
          <h5 className="post__title">{post?.title}</h5>
          <p className="post__address">
            <span style={{ margin: "0", opacity: 0.8, marginRight: "1rem" }}>
              <span style={{ marginRight: "0.5rem" }}>
                <i className={post?.category?.classes}></i>
              </span>
              {post?.category?.name}
            </span>
            <span style={{ margin: "0", opacity: 0.8 }}>
              <span style={{ marginRight: "0.5rem" }}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              {post?.location?.name}
            </span>
          </p>
          <p className="post__decreption">
            {!decription ? (
              <span style={{ margin: "0", opacity: 0.8 }}>
                <span style={{ marginRight: "0.5rem" }}>
                  <i className="fas fa-dollar-sign"></i>
                </span>
                {`${post?.price?.toLocaleString('de-DE')} đ`}
              </span>
            ) : (
              post?.content
            )}
          </p>
        </div>
        <div className="post__buttons">
          <Link
            className="post__btn"
            to={`/post/${removeAccents(post?.title, post?.id)}`}
          >
            Xem thêm
          </Link>
          {phone ? (
            <a className="post__btn" href={`tel:${phone}`}>
              Liên Hệ
            </a>
          ) : (
            <a className="post__btn" href={`mailto:${email}`}>
              Liên Hệ
            </a>
          )}
        </div>
      </div>
    </figure>
  );
}
