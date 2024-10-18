import { RecipeCardProps } from "@/types/Types";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  return (
    <Link
      to={`/app/recipe-book/recipe-details/${recipe.id}`}
      className="max-w-80 border-2 rounded-lg block"
    >
      <div className="w-full min-w-60 aspect-square rounded-t-md overflow-hidden">
        {isImgLoading && (
          <div className="w-full h-full grid place-items-center">
            <div className="imgLoader"></div>
          </div>
        )}
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={recipe.image}
          alt="Recipe Image"
          onLoad={() => setIsImgLoading(false)}
        />
      </div>
      <div className="p-2">
        <h3 className="text-2xl font-medium text-ellipsis whitespace-nowrap overflow-clip">
          {recipe.name}
        </h3>
        <div className="pt-2 flex divide-x-2 gap-1">
          <span>{recipe.cuisine}</span>
          <span className="flex divide-x-2 gap-1">
            {recipe.mealType.map((type: string) => (
              <span key={type} className="pl-1">
                {type}
              </span>
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
