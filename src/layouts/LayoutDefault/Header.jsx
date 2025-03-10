import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom"; // Thêm Link
import CartMini from "../../components/CartMini";
import { getCookie, deleteCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Header() {
  const [token, setToken] = useState(getCookie("token"));
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  //Tìm kiếm
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setQuery(search);
  };

  //End Tìm kiếm
  useEffect(() => {
    setToken(getCookie("token"));
  }, [isLogin]); // Chỉ cập nhật khi `isLogin` thay đổi

  const handleLogout = () => {
    deleteCookie("token");
    setToken(null);
  };

  return (
    <header className="layout-default__header" id="myHeader">
      <div className="layout-default__logo">
        <NavLink to="/" className="logo">
          <img src="Img/logo.webp" alt="Logo" />
        </NavLink>
      </div>

      <div className="layout-default__menu">
        <ul>
          <li>
            <NavLink to="/">Trang Chủ</NavLink>
          </li>
          <li>
            <NavLink to="/intro">Giới thiệu</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Cửa Hàng</NavLink>
            <ul className="layout-default__menu__submenu">
              <li>
                <NavLink to="/categories/feature_product">
                  Sản Phẩm Nổi Bật
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories/lastest_products">
                  Sản Phẩm Mới Nhất
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact">Liên Hệ</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>

      <div className="layout-default__action">
        <div className="layout-default__search">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên sản phẩm..."
            onChange={handleSearch}
            value={query}
          />
          <Link to="/categories">
            <img src="Img/icons-search.svg" alt="Search" />
          </Link>
        </div>

        {token && (
          <div className="layout-default__cart">
            <div className="layout-default__cart-icon">
              <CartMini />
            </div>
          </div>
        )}

        <div className="layout-default__love">
          <NavLink to="/wishlist">
            <i className="fas fa-heart"></i>
          </NavLink>
        </div>

        <div className="layout-default__account">
          {token ? (
            <NavLink to="/" onClick={handleLogout}>
              Đăng Xuất
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <FaSignInAlt /> Đăng Nhập
              </NavLink>
              <NavLink to="/register">
                <FaUserPlus /> Đăng Ký
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
