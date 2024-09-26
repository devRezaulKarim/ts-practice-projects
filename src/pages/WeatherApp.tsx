import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";

const WeatherApp = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto border border-gray-500 rounded-lg p-8 relative">
      <BackButton />
      <AppTitle title="Weather app" />
    </div>
  );
};

export default WeatherApp;
