import React from "react";
import PropTypes from "prop-types";

const recipeName = {
  textAlign: "center",
}

const imgStyleR = {
  maxWidth: "25%",
  backgroundColor: "lightgrey",
  display: "block",
  textAlign: "right",
  imageAlign: "right",
  marginLeft: "70%",
  marginRight: "5%",
}

const recipeInfo = {
  textAlign: "left",
  display: "block",
}

const recipeDeets = {
  border: "3px",
  borderStyle: "solid",
  paddingLeft: "15px",
}

function RecipeDetail(props){
  const { recipe, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div style={recipeDeets}>
      <h1 style={recipeName}>{recipe.name}</h1>
      <img style={imgStyleR} src={recipe.photo} alt="image of dish" />
      <div style={recipeInfo}>
      <h5>Ingredients</h5>
      <ul>
        {recipe.ingredients.split(',').map((ingredients) => (
          <li key={ingredients}>{ingredients.trim()}</li>
        ))}
      </ul>
      <h5>Instructions</h5>
      <ol>
        {recipe.instructions.split(',').map((instructions) => (
          <li key={instructions}>{instructions.trim()}</li>
        ))}
      </ol>
      </div>
      <hr />
      </div>
    </React.Fragment>
  );
}

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default RecipeDetail;