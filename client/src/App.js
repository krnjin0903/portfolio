import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import ProjectLayout from "./components/projects/ProjectLayout";
import Weather from "./components/projects/weatherApp/Weather";
import Calculator from "./components/projects/calculatorApp/Calculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="weatherApp" element={<Weather />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
