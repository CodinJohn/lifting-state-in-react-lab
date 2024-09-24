import React from 'react';

const IngredientList = ({availableIngredients, addToBurger}) => {
    return (<ul>
      {availableIngredients.map((ingredient, index) => (
        <li ket={index} style={{ color: ingredient.color}}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
    )
  };
  
  export default IngredientList;
  