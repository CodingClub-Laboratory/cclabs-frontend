import "./styles/tailwind.output.css";
import "./styles/styles.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doc from "./components/Doc";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar className="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doc" element={<Doc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
