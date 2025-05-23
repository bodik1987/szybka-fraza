import { NavLink, Outlet } from "react-router";

export default function Layout() {
  const baseClasses =
    "w-fit px-3 pb-2 pt-1.5 text-xl font-bold border-b-2 border-r-2 border-warning leading-none rounded-lg border-t-1 border-l-1";
  const activeClasses = "text-white bg-black shadow-md transition-all";
  const inactiveClasses = "border-t-1 border-l-1 bg-white";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  return (
    <main className="flex gap-5">
      <aside className="flex flex-col gap-3">
        <NavLink to="/" className={getLinkClass}>
          PA48
        </NavLink>
        <NavLink to="/mes" className={getLinkClass}>
          MES
        </NavLink>
        <a href="https://docs.google.com/spreadsheets/d/129dbrWn9laEzQHHvk3BilqQ4uih2SFN4wjDmsdNzCOA/edit?usp=sharing">
          Google
        </a>
      </aside>
      <Outlet />
    </main>
  );
}
