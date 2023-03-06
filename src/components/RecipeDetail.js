import React from "react";
import PropTypes from "prop-types";

function RecipeDetail(props){
  const { recipe, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{recipe.name}</h1>
      <img src={recipe.photo} alt="image of dish" />
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
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