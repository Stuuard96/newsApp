import React from "react";
import PropTypes from "prop-types";

export const NoticiaItem = ({ article }) => {
  const { title, description, url, urlToImage, source } = article;
  const Imagen = urlToImage ? (
    <div className="card-image">
      <img width={800} height={500} src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
  return (
    <div className="col s12 m6 l4.1">
      <div className="card">
        {Imagen}

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            more...
          </a>
        </div>
      </div>
    </div>
  );
};

NoticiaItem.propTypes = {
  article: PropTypes.object.isRequired,
};
