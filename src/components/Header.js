import React from "react";

const headerStyle = {
  textAlign: "center",
  textDecoration: "underline",
  fontFamily: "Cursive",
  border: "5px",
  borderStyle: "solid",
  borderColor: "blue",
  backgroundColor: "cornflowerblue",
}

function Header(){
  return (
    <React.Fragment>
    <div style={headerStyle}>
      <h1>Mauro's Recipe Book</h1>
      <h2>For the Best Vegan Recipes</h2>
    </div>
    </React.Fragment>
  );
}

export default Header;