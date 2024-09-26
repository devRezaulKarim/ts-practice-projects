import ExpenseTracker from "@/pages/ExpenseTracker";
import MovieSearchApp from "@/pages/MovieSearchApp";
import RecipeBook from "@/pages/RecipeBook";
import Todos from "@/pages/Todos";
import WeatherApp from "@/pages/WeatherApp";

const useApps = () => {
  return [
    { app: Todos, _id: "todo" },
    { app: WeatherApp, _id: "weather-app" },
    { app: ExpenseTracker, _id: "expense-tracker" },
    { app: MovieSearchApp, _id: "movie-search" },
    { app: RecipeBook, _id: "recipe-book" },
  ];
};

export default useApps;
