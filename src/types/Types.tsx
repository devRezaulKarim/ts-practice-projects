import { Dispatch, SetStateAction } from "react";

export interface SmallFormProps {
  dispatchSubmit: (value: string) => void;
  placeholder: string;
  buttonText: string;
}

export interface Todo {
  task: string;
  _id: number;
  status: "pending" | "completed";
}

export interface AppTitleProps {
  title: string;
}

export interface AddTodoProps {
  addTodo: (todo: string) => void;
}

export type StatusType = "all" | "pending" | "completed";

export interface StatusProps {
  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;
}

export interface TodoContainerProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  handleTaskDone: (_id: number) => void;
  handleUpdateTask: (task: Todo) => void;
  handleDeleteTask: (_id: number) => void;
}

export interface ConfirmationModalProps {
  handleDelete: () => void;
  setIsDeleting: Dispatch<SetStateAction<number | null>>;
}

export interface FormProps {
  searchCity: Dispatch<SetStateAction<string>>;
}

export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherCardProps {
  weather: Weather;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
