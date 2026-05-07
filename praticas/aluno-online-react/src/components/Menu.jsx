import { NavLink } from "react-router";
import logo from "../assets/learn.svg";

export default function Menu() {
  return (
    <aside className="bg-gray-300 h-screen hidden md:block w-64 p-4">
      <header className="flex gap-2 justify-center items-center">
        <img src={logo} alt="Logo da aplicação" className="w-12 h-12" />
        <h1 className="text-lg font-bold">Aluno online</h1>
      </header>
      <nav className="mt-12">
        <ul className="font-semibold flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/notas"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Notas
          </NavLink>
          <NavLink
            to="/faltas"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Faltas
          </NavLink>
          <NavLink
            to="/boletos"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Boletos
          </NavLink>
          <NavLink
            to="/requerimentos"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Requerimentos
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Sair
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}
