import useRecipes from "@/hooks/useRecipes";
import { Recipe } from "@/types/Types";
import { MouseEvent, useEffect, useState } from "react";
import SearchedRecipeBar from "./SearchedRecipeBar";
import RecipeCard from "./RecipeCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const Recipes = ({ recipeFor }: { recipeFor: string }) => {
  const { recipes, isLoading, fetchRecipe } = useRecipes();
  const [recipeOnUi, setRecipeOnUi] = useState<Recipe[]>(recipes);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const recipeToShow = [...recipes].slice(
      currentPage * 10 - 10,
      currentPage * 10
    );
    setRecipeOnUi(recipeToShow);
  }, [recipes, currentPage]);

  useEffect(() => {
    fetchRecipe(recipeFor);
    setCurrentPage(1);
  }, [recipeFor]);

  const handlePageClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    setCurrentPage(Number(target.innerText));
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < recipes.length / 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 place-items-center mt-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <RecipeCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {recipeFor && recipeOnUi.length > 0 && (
            <SearchedRecipeBar
              quantity={recipes.length}
              recipeFor={recipeFor}
            />
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 place-items-center mt-5">
            {recipeOnUi.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {Math.ceil(recipes.length / 10) > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    onClick={handlePreviousClick}
                  />
                </PaginationItem>
                <PaginationItem>
                  {Array.from({ length: Math.ceil(recipes.length / 10) }).map(
                    (_, i) => {
                      return (
                        <PaginationLink
                          key={i}
                          onClick={handlePageClick}
                          className={`cursor-pointer ml-2 ${
                            currentPage === i + 1
                              ? " border border-gray-200"
                              : ""
                          }`}
                        >
                          {i + 1}
                        </PaginationLink>
                      );
                    }
                  )}
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="cursor-pointer"
                    onClick={handleNextClick}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </>
  );
};

export default Recipes;
