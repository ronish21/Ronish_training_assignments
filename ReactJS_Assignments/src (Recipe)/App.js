/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*

import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SavedRecipes from './components/SavedRecipes';
import { getRecipes } from './api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(savedRecipes);
  }, []);

  const handleSearch = async (searchTerm) => {
    const recipes = await getRecipes(searchTerm);
    setRecipes(recipes);
    setSelectedRecipe(null);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleSaveRecipe = (recipe) => {
    const newSavedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(newSavedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      {selectedRecipe && (
    <RecipeDetail
      recipe={selectedRecipe}
      onSaveRecipe={handleSaveRecipe}
    />
  )}
  <SavedRecipes recipes={savedRecipes} />
</div>
);
}

export default App;*/

import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe';



const App = () => {

    const APP_ID = 'bbcea63e';
    const APP_KEY = '1d256635309f1d6a4fad4bb72e657247';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
     }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return ( 
      
        <div className = "App" >
          <h1>Tasty Recipe Waiting For You</h1>
        <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value={search} onChange={updateSearch}/>
        <button className = "search-button" type = "submit">Search</button>  
        </form> 
        <div className="recipes">
        {recipes.map(recipe =>(
            <Recipe 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}/>
        ))};
        </div>
        
        </div>
    );
};

export default App;





