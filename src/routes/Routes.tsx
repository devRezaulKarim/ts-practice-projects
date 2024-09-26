import App from "@/App";
import ExpenseTracker from "@/pages/ExpenseTracker";
import MovieSearchApp from "@/pages/MovieSearchApp";
import RecipeBook from "@/pages/RecipeBook";
import Todos from "@/pages/Todos";
import WeatherApp from "@/pages/WeatherApp";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app/todo",
    element: <Todos />,
  },
  {
    path: "/app/weather-app",
    element: <WeatherApp />,
  },
  {
    path: "/app/expense-tracker",
    element: <ExpenseTracker />,
  },
  {
    path: "/app/movie-search",
    element: <MovieSearchApp />,
  },
  {
    path: "/app/recipe-book",
    element: <RecipeBook />,
  },
]);
