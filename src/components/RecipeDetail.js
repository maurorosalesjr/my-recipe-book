import React from "react";
import PropTypes from "prop-types";

const recipeName = {
  textAlign: "center",
}

function RecipeDetail(props){
  const { recipe, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1 style={recipeName}>{recipe.name}</h1>
      <img src={recipe.photo} alt="image of dish" />
      <h5>Ingredients</h5>
      <ul>
        {recipe.ingredients.split(',').map((ingredients) => (
          <li key={ingredients}>{ingredients.trim()}</li>
        ))}
      </ul>
      <h5>Instructions</h5>
      <ul>
        {recipe.instructions.split(',').map((instructions) => (
          <li key={instructions}>{instructions.trim()}</li>
        ))}
      </ul>
      <hr />
    </React.Fragment>
  );
}

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default RecipeDetail;