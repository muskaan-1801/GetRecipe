import Styles from "./Card.module.css";

const Card = (props) => {
  console.log(props.recipe.recipe,"com");
  return (
    <div className={Styles.recipe}>
      <h2>{props.recipe.recipe.label}</h2>
      <img src={props.recipe.recipe.image} 
      className={Styles.image}/>
      <ol>
      <h3>Ingredients:</h3>
        {props.recipe.recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <h4>Calories: {props.recipe.recipe.calories}</h4>
    </div>
  )
};

export default Card;