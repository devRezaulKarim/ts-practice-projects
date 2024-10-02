const RecipeDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 animate-pulse">
      <div className="w-full h-96 rounded-lg bg-gray-300 mb-6"></div>

      <div className="mb-4">
        <div className="h-8 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/5"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
        <ul className=" space-y-2">
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
        <ol className=" space-y-2">
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
        </ol>
      </div>

      <div className="mb-6">
        <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
        <div className="flex gap-4 text-gray-700">
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsSkeleton;
