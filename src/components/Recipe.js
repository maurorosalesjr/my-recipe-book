import React from "react";
import PropTypes from "prop-types";
import './styles.css'

const previewStyle = {
  border: "2px",
  borderStyle: "solid",
  textAlign: "center",
  padding: "10px",
}


function Recipe(props){
  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="flex-item" style={previewStyle} onClick={() => props.whenRecipeClicked(props.id)}>
          <img src={props.photo} alt="imgage of food" />
          <p><em>{props.name}</em></p>
        </div>
      </div>
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