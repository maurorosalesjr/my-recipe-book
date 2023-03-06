import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewRecipeForm(props){
  
  function handleNewRecipeFormSubmission(event) {
    event.preventDefault();
    props.onNewRecipeCreation({
      name: event.target.name.value, 
      ingredients: event.target.ingredients.value, 
      instructions: event.target.instructions.value, 
      photo: event.target.photo.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewRecipeFormSubmission}
        buttonText="Add Recipe!" />
    </React.Fragment>
  );
}

NewRecipeForm.propTypes = {
  onNewRecipeCreation: PropTypes.func
};

export default NewRecipeForm;