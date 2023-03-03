import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";


function RecipeList(props){
  return (
    <React.Fragment>
      <hr/>
        {
          props.recipeList.map((recipe) =>
          <Recipe 
            whenRecipeClicked={props.onRecipeSelection} 
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            photo={recipe.photo}
            id={recipe.id}
            key={recipe.key}/>
          )}
    </React.Fragment>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func
}

export default RecipeList;