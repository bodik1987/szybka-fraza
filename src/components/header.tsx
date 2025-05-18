import { NavLink } from "react-router";

export default function Header() {
  const baseClasses =
    "w-fit px-3 pb-2 pt-1.5 text-xl font-bold border-b-2 border-r-2 border-warning leading-none rounded-lg border-t-1 border-l-1";
  const activeClasses = "text-white bg-black shadow-md transition-all";
  const inactiveClasses = "border-t-1 border-l-1 bg-white";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <header className="flex items-center gap-3 bg-accent/10 w-fit -skew-x-6 rounded-lg p-3">
      <NavLink to="/" className={getLinkClass}>
        PA48
      </NavLink>
      <NavLink to="/mes" className={getLinkClass}>
        MES
      </NavLink>
      <NavLink to="/notes" className={getLinkClass}>
        Notes
      </NavLink>
    </header>
  );
}
