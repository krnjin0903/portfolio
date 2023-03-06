import "./App.css";
import { Route, Routes } from "react-router-dom";
import OnChangeLocation from "./components/OnChangeLocation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import ProjectLayout from "./components/projects/ProjectLayout";
import Weather from "./components/projects/weatherApp/Weather";
import Calculator from "./components/projects/calculatorApp/Calculator";
import Todo from "./components/projects/todoApp/Todo";
import Mivet from "./components/projects/mivet/Mivet";

function App() {
  return (
    <div className="App">
      <OnChangeLocation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="weatherApp" element={<Weather />} />
          <Route path="calculatorApp" element={<Calculator />} />
          <Route path="todoApp" element={<Todo />} />
          <Route path="mivet" element={<Mivet />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
