import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";
import { getCategoryList } from "../../services/cartegoryService";
import ProductItem from "./StoreItem";
import { Link, useNavigate } from "react-router-dom";

function StoreAll() {
  const [data, setData] = useState([]);
  const [dataCata, setDataCata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getProductList();
      setData(res);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getCategoryList();
      setDataCata(res);
    };
    fetchApi();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <>
      <section className="section-1">
        <div className="banner">
          <div className="banner__text">
            <p className="banner__sale">GIẢM ĐẾN 50%</p>
          </div>
        </div>
      </section>

      <section className="section-2">
        <h2 className="title">Tất cả sản phẩm</h2>
        <div className="container">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3 className="sidebar__title">Lọc sản phẩm</h3>
            <select
              className="sidebar__dropdown"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Chọn danh mục</option>
              {dataCata.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <p className="sidebar__filter">Giá sản phẩm</p>
            <ul className="sidebar__filter-list">
              <li className="sidebar__filter-item">
                <input type="radio" name="priceFilter" /> Giá dưới 100.000đ
              </li>
              <li className="sidebar__filter-item">
                <input type="radio" name="priceFilter" /> 100.000đ - 200.000đ
              </li>
              <li className="sidebar__filter-item">
                <input type="radio" name="priceFilter" /> 200.000đ - 300.000đ
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <div className="product-grid">
              {data.length > 0 ? (
                data.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/categories/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <ProductItem product={product} />
                  </div>
                ))
              ) : (
                <p>Đang tải sản phẩm...</p>
              )}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
export default StoreAll;
