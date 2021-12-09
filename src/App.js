import "./styles/tailwind.output.css";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-screen h-screen flex font-extrabold text-5xl bg-blue-300">
      <Navbar />
      <img src="blueBox.png" className="w-full" />
    </div>
  );
}

export default App;
