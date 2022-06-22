import React from "react";
import useSelected from "../hooks/useSelected";

export const NoticiasCategory = ({ setCategory }) => {
  const listCategorys = [
    { value: "general", label: "Gereral" },
    { value: "entertainment", label: "Entrenimiento" },
    { value: "technology", label: "Tecnologia" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "business", label: "Negocios" },
    { value: "sports", label: "Deportes" },
  ];

  // hook
  const [category, SelectCategory] = useSelected("general", listCategorys);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
  };
  return (
    <div className="row">
      <div className="col 12 m8 offset-m2">
        <form onSubmit={handleOnSubmit}>
          <h2 className="">Encuentra Noticias por Categoria</h2>

          <SelectCategory />

          <div className="input-field col s12">
            <input type="submit" className="" value="Buscar"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
