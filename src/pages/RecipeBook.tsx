import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";
import { useLocation } from "react-router-dom";

const RecipeBook = () => {
  const location = useLocation();
  return (
    <div
      className={`w-full max-w-[800px] mx-auto border-gray-500 rounded-lg p-2 md:p-8 relative ${
        location.pathname.replace("/", "") ? "border" : ""
      }`}
    >
      <BackButton />

      <AppTitle title="Recipe Book" />
    </div>
  );
};

export default RecipeBook;
