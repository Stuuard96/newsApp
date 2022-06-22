import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoticiasList } from "../components/NoticiasList";
import { NoticiasCategory } from "../components/NoticiasCategory";

export const HomePage = () => {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const key = "69536173bca64950846a532c71b5c150";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    };
    requestApi();
  }, [category]);

  return (
    <section className="home">
      <div className="home__container">
        <NoticiasCategory setCategory={setCategory} />
        <NoticiasList articles={articles} />
      </div>
    </section>
  );
};
