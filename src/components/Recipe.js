import React from "react";
import PropTypes from "prop-types";

const previewStyle = {
  maxWidth: "25%",
  border: "5px",
  borderStyle: "solid",
  textAlign: "center",
}

function Recipe(props){
  return (
    <React.Fragment>
      <div style={previewStyle} onClick={() => props.whenRecipeClicked(props.id)}>
        <img src={props.photo} alt="imgage of food" />
        <p><em>{props.name}</em></p>
        {/* <p>{props.ingredients}</p>
        <p>{props.instructions}</p> */}
      </div>
      <hr />
    </React.Fragment>
  );
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  photo: PropTypes.string,
  id: PropTypes.string,
  whenRecipeClicked: PropTypes.func
}

export default Recipe;