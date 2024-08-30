import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecipesList } from "./recipes/RecipesList";
import { RecipesCreate } from "./recipes/RecipesCreate";
import { RecipesEdit } from "./recipes/RecipesEdit";
import { RecipesShow } from "./recipes/RecipesShow";
import { IngredientsList } from "./ingredients/IngredientsList";
import { IngredientsCreate } from "./ingredients/IngredientsCreate";
import { IngredientsEdit } from "./ingredients/IngredientsEdit";
import { IngredientsShow } from "./ingredients/IngredientsShow";
import { FridgeItemsList } from "./fridgeItems/FridgeItemsList";
import { FridgeItemsCreate } from "./fridgeItems/FridgeItemsCreate";
import { FridgeItemsEdit } from "./fridgeItems/FridgeItemsEdit";
import { FridgeItemsShow } from "./fridgeItems/FridgeItemsShow";
import { ShoppingCartList } from "./shoppingCart/ShoppingCartList";
import { ShoppingCartCreate } from "./shoppingCart/ShoppingCartCreate";
import { ShoppingCartEdit } from "./shoppingCart/ShoppingCartEdit";
import { ShoppingCartShow } from "./shoppingCart/ShoppingCartShow";
import { RecipeIngredientsList } from "./recipeIngredients/RecipeIngredientsList";
import { RecipeIngredientsCreate } from "./recipeIngredients/RecipeIngredientsCreate";
import { RecipeIngredientsEdit } from "./recipeIngredients/RecipeIngredientsEdit";
import { RecipeIngredientsShow } from "./recipeIngredients/RecipeIngredientsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ShoppingListGenerator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recipes"
          list={RecipesList}
          edit={RecipesEdit}
          create={RecipesCreate}
          show={RecipesShow}
        />
        <Resource
          name="Ingredients"
          list={IngredientsList}
          edit={IngredientsEdit}
          create={IngredientsCreate}
          show={IngredientsShow}
        />
        <Resource
          name="FridgeItems"
          list={FridgeItemsList}
          edit={FridgeItemsEdit}
          create={FridgeItemsCreate}
          show={FridgeItemsShow}
        />
        <Resource
          name="ShoppingCart"
          list={ShoppingCartList}
          edit={ShoppingCartEdit}
          create={ShoppingCartCreate}
          show={ShoppingCartShow}
        />
        <Resource
          name="RecipeIngredients"
          list={RecipeIngredientsList}
          edit={RecipeIngredientsEdit}
          create={RecipeIngredientsCreate}
          show={RecipeIngredientsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
