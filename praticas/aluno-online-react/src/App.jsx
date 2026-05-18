import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  );
}

export default App;
