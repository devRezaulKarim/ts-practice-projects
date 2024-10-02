/* eslint-disable @typescript-eslint/no-unused-vars */
import { Recipe } from "@/types/Types";
import { useState } from "react";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetchRecipe = async (recipeFor: string) => {
    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/recipes/search?q=${recipeFor}&limit=50`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const getSingleRecipe = async (id: string) => {
    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/recipes/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return { getSingleRecipe, recipe, fetchRecipe, recipes, isLoading, error };
};

export default useRecipes;
