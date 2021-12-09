import "./styles/tailwind.output.css";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-extrabold text-5xl text-red-600 md:text-blue-400 bg-blue-600">
      Hello World
      <Navbar />
    </div>
  );
}

export default App;
