import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center py-5 shadow bg-green-300">
      <ul className="flex gap-5 font-bold">
        <li>
          <Link to="/entry-products">Entry Product</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
