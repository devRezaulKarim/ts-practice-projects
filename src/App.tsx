import { Link } from "react-router-dom";
import "./App.css";
import useApps from "./hooks/useApps";

function App() {
  const apps = useApps();
  return (
    <main className="flex flex-wrap gap-8 justify-center">
      {/* <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "> */}
      {apps.map((App) => (
        <div
          key={App._id}
          className="w-96 h-72 overflow-hidden relative border border-gray-700 rounded-lg"
        >
          <App.app />
          <Link
            to={`/app/${App._id}`}
            className="bg-transparent w-full h-full absolute top-0 left-0"
          ></Link>
        </div>
      ))}
    </main>
  );
}

export default App;
