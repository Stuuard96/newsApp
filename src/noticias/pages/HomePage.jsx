import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoticiasList } from "../components/NoticiasList";
import { NoticiasCategory } from "../components/NoticiasCategory";

export const HomePage = () => {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      // const key = "69536173bca64950846a532c71b5c150";
      // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
      const BASE_URL = "https://saurav.tech/NewsAPI/";
      const url = `${BASE_URL}/top-headlines/category/${category}/us.json`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    };
    requestApi();
  }, [category]);

  return (
    <section className="home">
      <NoticiasCategory setCategory={setCategory} />
      <div className="home__container">
        <div className="home__noticias">
          <NoticiasList articles={articles} />
        </div>
      </div>
    </section>
  );
};
