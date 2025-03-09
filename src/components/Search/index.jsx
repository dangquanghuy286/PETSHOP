import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Điều hướng trang

function SearchItem() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Kiểm soát dropdown

  const navigate = useNavigate(); // Hook điều hướng

  // Xử lý khi nhập vào ô tìm kiếm
  const handleInputChanged = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setProducts([]);
      setShowDropdown(false);
    }
  };

  // Xử lý khi nhấn Search
  const handleSearch = async () => {
    if (query.trim() === "") return;

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3002/products?name_like=${query}`
      );
      if (!response.ok) {
        throw new Error("Lỗi khi lấy dữ liệu");
      }

      const data = await response.json();
      setProducts(data || []);
      setShowDropdown(data.length > 0); // Hiển thị dropdown nếu có kết quả
    } catch (error) {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setProducts([]);
      setShowDropdown(false);
    } finally {
      setLoading(false);
    }
  };

  // Xử lý khi nhấn Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Điều hướng đến trang chi tiết sản phẩm
  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Điều hướng đến trang chi tiết
    setShowDropdown(false); // Ẩn dropdown sau khi chọn
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tìm kiếm sản phẩm..."
        value={query}
        onChange={handleInputChanged}
        onKeyDown={handleKeyDown}
      />
      <img
        src="Img/icons-search.svg"
        alt="Search"
        className="absolute right-2 top-2 w-6 cursor-pointer"
        onClick={handleSearch}
      />

      {loading && <p className="mt-2 text-gray-500">Đang tìm kiếm...</p>}

      {/* Hiển thị dropdown khi có kết quả */}
      {showDropdown && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {products.map((product) => (
            <li
              key={product.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name} - {product.price.toLocaleString()}đ
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchItem;
