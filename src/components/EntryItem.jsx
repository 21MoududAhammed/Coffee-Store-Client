import { useState } from "react";

export default function EntryItem() {
  const initialData = {
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  };
  const [item, setItem] = useState(initialData);

  const handleSubmit = async (e) => {
    console.log(item);
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/coffees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (res.status === 201) {
        const data = await res.json();
        alert(data?.message);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-5">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Account settings
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Name
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="chef">
              Chef
            </label>
            <input
              id="chef"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.chef}
              onChange={(e) => setItem({ ...item, chef: e.target.value })}
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="supplier"
            >
              Supplier
            </label>
            <input
              id="supplier"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.supplier}
              onChange={(e) => setItem({ ...item, supplier: e.target.value })}
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="taste">
              Taste
            </label>
            <input
              id="taste"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.taste}
              onChange={(e) => setItem({ ...item, taste: e.target.value })}
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.category}
              onChange={(e) => setItem({ ...item, category: e.target.value })}
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="details">
              Details
            </label>
            <input
              id="details"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.details}
              onChange={(e) => setItem({ ...item, details: e.target.value })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="photo">
              Photo Url
            </label>
            <input
              id="photo"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={item.photo}
              onChange={(e) => setItem({ ...item, photo: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <input
            className="w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
            value="Add Coffee"
          />
        </div>
      </form>
    </section>
  );
}
