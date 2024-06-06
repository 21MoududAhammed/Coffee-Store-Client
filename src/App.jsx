import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import EntryItem from "./components/EntryItem";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/entry-products" element={<EntryItem />} />
      </Routes>
    </div>
  );
}
