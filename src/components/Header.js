import React from "react";

const headerStyle = {
  textAlign: "center",
  textDecoration: "underline",
  textDecorationStyle: "double",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
  fontFamily: "Cursive",
  border: "5px",
  borderStyle: "solid",
  borderColor: "Burlywood",
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