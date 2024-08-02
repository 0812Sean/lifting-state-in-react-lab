const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ background: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;