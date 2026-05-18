import { Outlet } from "react-router";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <div className="flex">
      <Menu />
      <main className="p-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
