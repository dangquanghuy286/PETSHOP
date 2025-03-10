import { useEffect, useState } from "react"; // Import các hook của React
import { getProductList } from "../../services/productsService"; // Import hàm lấy danh sách sản phẩm từ API
import { getCategoryList } from "../../services/cartegoryService"; // Import hàm lấy danh mục từ API
import ProductItem from "./StoreItem"; // Import component hiển thị từng sản phẩm
import { useNavigate } from "react-router-dom"; // Import hook điều hướng trong React Router

function StoreAll() {
  // 🟢 State lưu danh sách sản phẩm từ API
  const [data, setData] = useState([]);

  // 🟢 State lưu danh sách danh mục từ API
  const [dataCata, setDataCata] = useState([]);

  // 🟢 State lưu danh mục được chọn để lọc
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🟢 State lưu khoảng giá được chọn để lọc
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // 🟢 Hook điều hướng trang
  const navigate = useNavigate();

  // 🟢 Fetch danh sách sản phẩm từ API khi component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProductList(); // Gọi API lấy danh sách sản phẩm
      setData(res); // Lưu danh sách sản phẩm vào state
    };
    fetchProducts();
  }, []);

  // 🟢 Fetch danh sách danh mục từ API khi component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategoryList(); // Gọi API lấy danh mục sản phẩm
      setDataCata(res); // Lưu danh mục vào state
    };
    fetchCategories();
  }, []);

  // 🟢 Hàm lọc sản phẩm theo danh mục và giá
  const filteredProducts = data.filter((product) => {
    // 🟠 Kiểm tra xem sản phẩm có thuộc danh mục đã chọn không
    const isCategoryMatch =
      !selectedCategory || product.category === Number(selectedCategory);
    // Nếu không chọn danh mục (selectedCategory rỗng) → Chấp nhận tất cả sản phẩm.
    // Nếu đã chọn danh mục (selectedCategory có giá trị) → Chỉ giữ lại các sản phẩm có category khớp với danh mục đã chọn.

    // 🟠 Kiểm tra xem sản phẩm có nằm trong khoảng giá được chọn không
    const isPriceMatch = (() => {
      if (!selectedPriceRange) return true;
      // Nếu không chọn khoảng giá, trả về true (không lọc)

      const [min, max] = selectedPriceRange.split("-").map(Number);
      // Chuyển khoảng giá từ chuỗi thành số

      return product.price >= min && product.price <= max; // Kiểm tra nếu giá nằm trong khoảng
    })();

    return isCategoryMatch && isPriceMatch; // Chỉ giữ lại sản phẩm thỏa mãn cả 2 điều kiện
  });

  return (
    <>
      {/* 🔴 Banner khuyến mãi */}
      <section className="section-1">
        <div className="banner">
          <div className="banner__text">
            <p className="banner__sale">GIẢM ĐẾN 50%</p>
          </div>
        </div>
      </section>

      {/* 🟢 Danh sách sản phẩm */}
      <section className="section-2">
        <h2 className="title">Tất cả sản phẩm</h2>
        <div className="container">
          {/* 🟠 Sidebar bộ lọc sản phẩm */}
          <aside className="sidebar">
            <h3 className="sidebar__title">Lọc sản phẩm</h3>

            {/* 🟢 Dropdown chọn danh mục */}
            <select
              className="sidebar__dropdown"
              value={selectedCategory} // Giá trị của dropdown
              onChange={(e) => setSelectedCategory(e.target.value)} // Cập nhật state khi chọn danh mục
            >
              <option value="">Chọn danh mục</option>
              {dataCata.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            {/* 🟢 Bộ lọc giá */}
            <p className="sidebar__filter">Giá sản phẩm</p>
            <ul className="sidebar__filter-list">
              {[
                { label: "Dưới 100.000đ", value: "0-100000" },
                { label: "100.000đ - 200.000đ", value: "100000-200000" },
                { label: "200.000đ - 300.000đ", value: "200000-300000" },
              ].map((range) => (
                <li className="sidebar__filter-item" key={range.value}>
                  <input
                    type="radio"
                    name="priceFilter"
                    value={range.value}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    checked={selectedPriceRange === range.value} // Đánh dấu radio nếu được chọn
                  />{" "}
                  {range.label}
                </li>
              ))}
            </ul>
          </aside>

          {/* 🟢 Danh sách sản phẩm sau khi lọc */}
          <main className="main-content">
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/categories/${product.id}`)} // Điều hướng đến trang chi tiết sản phẩm
                    style={{ cursor: "pointer" }}
                  >
                    <ProductItem product={product} /> {/* Hiển thị sản phẩm */}
                  </div>
                ))
              ) : (
                <h3>Không tìm thấy sản phẩm phù hợp.</h3> // Thông báo nếu không có sản phẩm phù hợp
              )}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default StoreAll;
