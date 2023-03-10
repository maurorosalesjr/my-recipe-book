import React from "react";
import Header from "./Header";
import RecipeControl from "./RecipeControl";

const basicStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  backgroundColor: "grey",
  
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
