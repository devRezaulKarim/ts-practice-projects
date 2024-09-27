import WeatherCard from "@/components/custom-components/weather/WeatherCard";
import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";
import SmallForm from "@/components/shared/SmallForm";
import { Weather } from "@/types/Types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const apiKey = "16f00dd6edca31d9934c7fd9cdfba77c";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const WeatherApp = () => {
  const [city, setCity] = useState<string>("dhaka");
  const [error, setError] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const apiResponse = await fetch(
        `${baseUrl}q=${city}&units=metric&APPID=${apiKey}`
      );
      const response = await apiResponse.json();
      console.log(response);
      if (response?.cod !== "404") {
        setWeatherData(response);
        setError("");
      } else {
        setError(`"${city}" ${response.message}`);
      }
    })();
  }, [city]);

  return (
    <div
      className={`w-full max-w-[800px] mx-auto border-gray-500 rounded-lg p-2 md:p-8 relative ${
        location.pathname.replace("/", "") ? "border" : ""
      }`}
    >
      <BackButton />
      <AppTitle title="Weather app" />
      <SmallForm
        buttonText="Search"
        dispatchSubmit={setCity}
        placeholder="City"
      />
      {error && (
        <p className="first-letter:uppercase pt-1 text-red-500 font-semibold">
          {error}
        </p>
      )}
      {weatherData && location.pathname.replace("/", "") && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
};

export default WeatherApp;
