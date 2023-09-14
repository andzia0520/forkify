import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './views/resultsView';
import searchView from './views/searchView';

if (module.hot) {
  module.hot.accept;
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. get serch query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render results
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);

    //render initial pagination button
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
