import React from "react";
import Header from "./Header";
import RecipeControl from "./RecipeControl";

const basicStyle = {
  marginLeft: "1%",
  marginRight: "1%",
  backgroundColor: "grey",
  border: "3px",
  borderColor: "black",
  
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={basicStyle}>
        <RecipeControl />
      </div>
    </React.Fragment>
  );
}

export default App;
