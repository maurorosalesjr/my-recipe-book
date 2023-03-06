import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Recipe Name' />
          <br></br>
        <textarea
          name='ingredients'
          placeholder='what ingredients are used' />
          <br></br>
        <textarea
          name='instructions'
          placeholder='Instructions please' />
          <br></br>
          <input 
            type='file'
            name='photo'
            placeholder='add a photo'
          />
          <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;