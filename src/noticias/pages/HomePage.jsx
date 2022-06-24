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
      const key = "deb00c9a16614ba5acdadf7cca2cfb8b";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
      /*
        .then((response) => response.get())
        .then((data) => {
          setArticles(data.articles);
        })
        .catch((error) => {
          console.log(error);
        }); */
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
