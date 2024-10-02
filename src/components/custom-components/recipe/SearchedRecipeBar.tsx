import { SearchedRecipeBarProps } from "@/types/Types";

const SearchedRecipeBar = ({ quantity, recipeFor }: SearchedRecipeBarProps) => {
  const singularPlural = (quantity: number): string => {
    if (quantity > 1) {
      return "recipes";
    } else return "recipe";
  };
  return (
    <div className="my-5">
      <h4 className="text-xl font-semibold">
        <span>{quantity}</span> <span>{singularPlural(quantity)}</span> found
        for <span className="italic">"{recipeFor}"</span>
      </h4>
    </div>
  );
};

export default SearchedRecipeBar;
