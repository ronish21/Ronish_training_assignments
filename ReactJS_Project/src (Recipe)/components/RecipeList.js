import React from 'react';

function RecipeList(props) {
  const { recipes, onRecipeSelect } = props;

  const handleClick = (recipe) => {
    onRecipeSelect(recipe);
  };

  return (
    <div>
      <h2>Indian Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <a href="#" onClick={() => handleClick(recipe)}>
              {recipe.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
