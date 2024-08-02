const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        props.stack.map((ingredient, index) => (
          <li key={index} style={{ background: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
