import React, { useState } from "react";

const useSelected = (stateInicial, categorys) => {
  const [state, setState] = useState(stateInicial);

  const SelectCategory = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {categorys.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectCategory];
};

export default useSelected;
