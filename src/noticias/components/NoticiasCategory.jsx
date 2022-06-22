import React from "react";

export const NoticiasCategory = ({ setCategory }) => {
  const listCategorys = [
    { value: "general", label: "General" },
    { value: "entertainment", label: "Entrenimiento" },
    { value: "technology", label: "Tecnologia" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "business", label: "Negocios" },
    { value: "sports", label: "Deportes" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <div className="home__categorias">
      <ul className="home__categorias--list">
        {listCategorys.map((category) => (
          <li key={category.value}>
            <button onClick={handleClick} value={category.value}>
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
