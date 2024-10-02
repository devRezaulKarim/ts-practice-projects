const RecipeCardSkeleton = () => {
  return (
    <div className="max-w-80 border-2 rounded-lg block animate-pulse">
      <div className="w-[316px] aspect-square rounded-t-md bg-gray-300"></div>
      <div className="p-2">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="pt-2 flex divide-x-2 gap-1">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
          <div className="flex divide-x-2 gap-1">
            <div className="h-4 w-12 bg-gray-300 rounded pl-1"></div>
            <div className="h-4 w-12 bg-gray-300 rounded pl-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
