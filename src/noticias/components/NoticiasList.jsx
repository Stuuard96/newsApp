import React from "react";
import PropTypes from "prop-types";
import { NoticiaItem } from "./NoticiaItem";

export const NoticiasList = ({ articles }) => {
  // console.log(articles);
  return (
    <>
      {articles.map((article, index) => (
        <NoticiaItem key={index} article={article} />
      ))}
    </>
  );
};

NoticiasList.propTypes = {
  articles: PropTypes.object.isRequired,
};
