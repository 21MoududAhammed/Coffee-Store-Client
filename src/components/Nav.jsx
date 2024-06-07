import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center py-5 shadow">
      <ul className="flex gap-5 font-bold">
        <li>
          <NavLink
            to="/entry-products"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Entry Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
