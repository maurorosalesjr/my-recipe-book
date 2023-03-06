import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditRecipeForm(props){
  const {recipe} = props;

  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe({name: event.target.name.value, ingredients: event.target.ingredients.value, instructions: event.target.instructions.value, photo: event.target.photo.value, id: recipe.id })
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update Recipe" />
    </React.Fragment>
  );
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
}

export default EditRecipeForm;