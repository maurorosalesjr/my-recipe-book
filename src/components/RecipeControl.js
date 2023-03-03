import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import mainRecipeList from "./MainRecipeList";

class RecipeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainRecipeList: mainRecipeList,
      selectedRecipe: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleAddingNewRecipeToList = (newRecipe) => {
    const newMainRecipeList = this.state.mainRecipeList.concat(newRecipe);
    this.setState({mainRecipeList: newMainRecipeList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedRecipe: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedRecipe = (id) => {
    const selectedRecipe = this.state.mainRecipeList.filter(recipe => recipe.id === id)[0];
    this.setState({selectedRecipe: selectedRecipe});
  }

  
    // EDIT AND DELETE RECIPE ARE REMOVED FROM THIS VERSION OF APP
      
  // handleDeletingRecipe = (id) => {
  //   const newMainRecipeList = this.state.mainRecipeList.filter(recipe => recipe.id !== id);
  //   this.setState({
  //     mainRecipeList: newMainRecipeList,
  //     selectedRecipe: null
  //   });
  // }

  // handleEditClick = () => {
  //   console.log("handleEditClick reached!");
  //   this.setState({editing: true});
  // }

  // handleEditingRecipeInList = (recipeToEdit) => {
  //   const editedMainRecipeList = this.state.mainRecipeList
  //     .filter(recipe => recipe.id !== this.state.selectedRecipe.id)
  //     .concat(recipeToEdit);
  //   this.setState({
  //       mainRecipeList: editedMainRecipeList,
  //       editing: false,
  //       selectedRecipe: null
  //     });
  // }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditRecipeForm recipe = {this.state.selectedRecipe}
                                              onEditRecipe = {this.handleEditingRecipeInList} />
      buttonText = "Return to Recipe List";
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState = <RecipeDetail recipe = {this.state.selectedRecipe} 
                                            onClickingDelete = {this.handleDeletingRecipe}
                                            onClickingEdit = {this.handleEditClick} 
                                            />
      buttonText = "Return to Recipe List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewRecipeForm onNewRecipeCreation={this.handleAddingNewRecipeToList}  />;
      buttonText = "Return to Recipe List";
    } else {
      currentlyVisibleState = <RecipeList recipeList={this.state.mainRecipeList} 
                                          onRecipeSelection={this.handleChangingSelectedRecipe}
                                          onClickingSubtract = {this.handleRecipeSub}
                                          onClickingBulk = {this.handleRecipeBulk} />;
      buttonText = "Add Recipe";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default RecipeControl;