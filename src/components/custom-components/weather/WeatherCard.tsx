import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeatherCardProps } from "@/types/Types";

const WeatherCard = ({ weather }: WeatherCardProps) => {
  console.log(weather.main);
  return (
    <Card className="mt-6 w-fit mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>
              {weather?.name}
              {`, ${weather?.sys?.country}`}
            </CardTitle>
            <CardDescription className="mt-1">
              <span className="block">lon: {weather.coord.lon}</span>
              <span className="block">lat: {weather.coord.lat}</span>
            </CardDescription>
          </div>
          <div className="">
            {weather.weather.map((w, i) => (
              <div key={i}>
                <img
                  width={40}
                  className="mx-auto"
                  src={`https://openweathermap.org/img/wn/${w.icon}.png`}
                  alt=""
                />
                <p className="text-center">{w.main}</p>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td className="border py-1 px-4 capitalize">temp</td>
              <td className="border py-1 px-4 capitalize">
                {weather.main.temp}°C
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-4 capitalize">feels like</td>
              <td className="border py-1 px-4 capitalize">
                {weather.main.feels_like}°C
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-4 capitalize">humidity</td>
              <td className="border py-1 px-4 capitalize">
                {weather.main.humidity}%
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-4 capitalize">max temp</td>
              <td className="border py-1 px-4 capitalize">
                {weather.main.temp_max}°C
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-4 capitalize">min temp</td>
              <td className="border py-1 px-4 capitalize">
                {weather.main.temp_min}°C
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
