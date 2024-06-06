export default function ProductCard({ product, onDelete }) {
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url(${product?.photo})`,
        }}
      />
      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {product?.name}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Taste: {product?.taste}
        </p>
        <div className="flex mt-2 item-center">
          <p>Details: {product?.details}</p>
        </div>
        <div className="flex justify-between mt-3 item-center">
          <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
            update
          </button>
          <button
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
            onClick={() => onDelete(product?._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
