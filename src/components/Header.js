import React from "react";

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