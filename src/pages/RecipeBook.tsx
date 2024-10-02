import Recipes from "@/components/custom-components/recipe/Recipes";
import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";
import SmallForm from "@/components/shared/SmallForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const RecipeBook = () => {
  const [recipeFor, setRecipeFor] = useState<string>("");
  const location = useLocation();

  return (
    <div
      className={`w-full max-w-[800px] mx-auto border-gray-500 rounded-lg p-2 md:p-8 relative ${
        location.pathname.replace("/", "") ? "border" : ""
      }`}
    >
      <BackButton />

      <AppTitle title="Recipe Book" />
      <div className="flex gap-2">
        <SmallForm
          buttonText="Search"
          placeholder="Chicken"
          dispatchSubmit={setRecipeFor}
        />
        {recipeFor && (
          <Button
            onClick={() => setRecipeFor("")}
            variant="outline"
            className="text-red-500 hover:text-red-600 border-red-500 uppercase"
          >
            Reset
          </Button>
        )}
      </div>
      {location.pathname.replace("/", "") && <Recipes recipeFor={recipeFor} />}
    </div>
  );
};

export default RecipeBook;
