import React from "react";
import PropTypes from "prop-types";

export const NoticiaItem = ({ article }) => {
  const { title, description, url, urlToImage, source } = article;
  const Imagen = (
    /* urlToImage ? ( */
    <figure style={{ margin: "0" }} className="card__imagen">
      <a href={url} target="__blank">
        <img
          loading="lazy"
          width="366"
          height="220"
          src={urlToImage}
          alt={title}
        />
      </a>

      <span className="card-title">{source.name}</span>
    </figure>
  );
  // ) : null;

  return urlToImage ? (
    <div className="card">
      {Imagen}
      <div className="card__container">
        <div className="card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

NoticiaItem.propTypes = {
  article: PropTypes.object.isRequired,
};
