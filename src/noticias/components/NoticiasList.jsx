import React from "react";
import PropTypes from "prop-types";
import { NoticiaItem } from "./NoticiaItem";

export const NoticiasList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <NoticiaItem key={article.url} article={article} />
      ))}
    </>
  );
};

NoticiasList.propTypes = {
  articles: PropTypes.array.isRequired,
};
