import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SearchItem() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Xử lý thay đổi input
  const handleInputChanged = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setProducts([]);
      setShowDropdown(false);
    }
  };

  // Tìm kiếm sản phẩm
  const handleSearch = async () => {
    if (query.trim() === "") return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3002/products?name_like=${query}`
      );
      const data = await response.json();
      setProducts(data || []);
      setShowDropdown(data.length > 0);
    } catch (error) {
      console.error("Lỗi tìm kiếm:", error);
      setProducts([]);
      setShowDropdown(false);
    } finally {
      setLoading(false);
    }
  };

  // Chuyển hướng sang trang chi tiết sản phẩm
  const handleProductClick = (productId) => {
    navigate(`/categories/${productId}`);
    setShowDropdown(false);
  };

  return (
    <div className="layout-default__search">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sản phẩm..."
        value={query}
        onChange={handleInputChanged}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <img src="Img/icons-search.svg" alt="Search" onClick={handleSearch} />

      {loading && <p>Đang tìm kiếm...</p>}

      {showDropdown && (
        <ul className="dropdown">
          {products.length > 0
            ? products.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                >
                  <span>
                    {product.name} - {product.price.toLocaleString()}đ
                  </span>
                  <button onClick={() => navigate(`/categories/${product.id}`)}>
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </li>
              ))
            : !loading && query && <p>Không tìm thấy sản phẩm nào!</p>}
        </ul>
      )}
    </div>
  );
}

export default SearchItem;
