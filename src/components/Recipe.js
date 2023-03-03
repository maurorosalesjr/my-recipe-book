import React from "react";
import PropTypes from "prop-types";

function Recipe(props){
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  photo: PropTypes.string,
  id: PropTypes.string,
}

export default Recipe;