import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/CRUD-App">
        <Navbar />
        <Routes>
          <Route exact path="/CRUD-App" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
