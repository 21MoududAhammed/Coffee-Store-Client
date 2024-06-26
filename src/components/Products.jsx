import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [items, setItems] = useState([]);

  // delete a product 
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/coffees/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        alert(data?.message);
        setItems(items.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // get all items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/coffees`);
        if (res.status === 200) {
          const data = await res.json();
          setItems(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-5 m-3">
      {items?.length > 0 &&
        items.map((item) => (
          <ProductCard key={item._id} product={item} onDelete={handleDelete} />
        ))}
    </div>
  );
}
