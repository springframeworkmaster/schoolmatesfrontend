import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListSchoolmateComponent from "./components/ListSchoolmateComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolmateComponent from "./components/SchoolmateComponent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListSchoolmateComponent />} />
          <Route path="/schoolmates" element={<ListSchoolmateComponent />} />
          <Route path="/add-schoolmate" element={<SchoolmateComponent />} />
          <Route path="/edit-schoolmate/:id" element={<SchoolmateComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
