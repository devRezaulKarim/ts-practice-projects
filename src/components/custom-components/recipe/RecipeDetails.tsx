import useRecipes from "@/hooks/useRecipes";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeDetailsSkeleton from "./RecipeDetailsSkeleton";
import { Button } from "@/components/ui/button";

const RecipeDetails = () => {
  const { recipe, isLoading, getSingleRecipe } = useRecipes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fetch recipe if `params.id` exists
    if (params.id) {
      getSingleRecipe(params.id);
    }
  }, [params.id]);

  if (isLoading || !recipe) {
    return <RecipeDetailsSkeleton />;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 border border-gray-500 rounded-lg">
        {/* Recipe Image  */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 relative">
          <div className="absolute pr-2 pb-2 bg-white rounded-br-lg">
            <Button
              className="uppercase"
              size={"sm"}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <div
              className="w-3 h-3 bg-transparent absolute right-0 top-0 rounded-full translate-x-full "
              style={{ boxShadow: "-4px -4px 0px 0px white" }}
            ></div>
            <div
              className="w-3 h-3 bg-transparent absolute left-0 bottom-0 rounded-full translate-y-full"
              style={{ boxShadow: "-4px -4px 0px 0px white" }}
            ></div>
          </div>
          <img
            className="w-full h-full object-cover"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        {/* Recipe Name and Basic Info  */}
        <div className="mb-4">
          <h1 className="text-lg md:text-3xl font-bold mb-2">{recipe.name}</h1>
          <div className="flex items-center gap-4 text-gray-600 flex-wrap">
            <span className="text-lg">
              ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
            </span>
            <span className="text-lg">🍽 {recipe.servings} servings</span>
            <span className="text-lg">
              ⏲ Prep: {recipe.prepTimeMinutes} mins | Cook:{" "}
              {recipe.cookTimeMinutes} mins
            </span>
            <span className="text-lg">🥄 Difficulty: {recipe.difficulty}</span>
          </div>
        </div>

        {/* Recipe Tags */}
        {/* <div className="mb-6">
    <div className="flex gap-2 flex-wrap">
      {recipe.tags.map((tag) => (
        <span key={tag} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  </div> */}

        {/* Ingredients  */}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/*  Instructions  */}
        {recipe.instructions && recipe.instructions.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/*  Additional Info  */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Info</h2>
          <div className="flex gap-4 text-gray-700 flex-wrap">
            <span>🔥 Calories per serving: {recipe.caloriesPerServing}</span>
            <span>🌍 Origin: {recipe.cuisine}</span>
            <span>🍴 Meal Type: {recipe.mealType.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
