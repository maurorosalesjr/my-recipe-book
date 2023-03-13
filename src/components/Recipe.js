import React from "react";
import PropTypes from "prop-types";
import './styles.css'

const previewStyle = {
  marginTop: "1%",
  textAlign: "right",
  padding: "10px",
  align: "center",
  zIndex: "2"
}

const imgStyle = {
  maxWidth: "150px",
  backgroundColor: "lightgrey",
  display: "block",
  align: "left",
  zIndex: "3",
}


function Recipe(props){
  return (
    <React.Fragment>
      <div class="button-89">
        <div style={previewStyle} onClick={() => props.whenRecipeClicked(props.id)}>
          <img style={imgStyle} src={props.photo} alt="imgage of food" />
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