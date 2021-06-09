import React from "react";
import "../../assets/css/relatedpostcard.css";
import { getPrice, removeAccents } from "../../assets/consts/function";
import noimage from "../../assets/images/noimage.jpeg";
import { Link } from "react-router-dom";

export default function RelatedPostCard(props) {
  const { post, decription = false } = props;
  const {
    user: { phone, email },
  } = post;
  return (
    <figure className="related-post">
      <div className="related-post__hero">
        <div className="related-post__image">
          <div
            className="related-post__img"
            style={{ backgroundImage: `url(${post?.img_url || noimage})` }}
          ></div>
        </div>
        {decription && (
          <div className="related-post__middle">
            <p className="related-post__middle-text">{getPrice(post?.price)}</p>
          </div>
        )}
      </div>
      <div className="related-post__content">
        <div className="related-post__info">
          <h5 className="related-post__title">{post?.title}</h5>
          <p className="related-post__address">
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
          <p className="related-post__decreption">
            {!decription ? (
              <span style={{ margin: "0", opacity: 0.8 }}>
                <span style={{ marginRight: "0.5rem" }}>
                  <i className="fas fa-dollar-sign"></i>
                </span>
                {getPrice(post?.price)}
              </span>
            ) : (
              post?.content
            )}
          </p>
        </div>
        <div className="related-post__buttons">
          <Link
            className="related-post__btn"
            to={`/post/${removeAccents(post?.title, post?.id)}`}
          >
            Xem thêm
          </Link>
          {phone ? (
            <a className="related-post__btn" href={`tel:${phone}`}>
              Liên Hệ
            </a>
          ) : (
            <a className="related-post__btn" href={`mailto:${email}`}>
              Liên Hệ
            </a>
          )}
        </div>
      </div>
    </figure>
  );
}
