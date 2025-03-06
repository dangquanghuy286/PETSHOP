import { NavLink } from "react-router-dom";
import CartMini from "../../components/CartMini";
function Header() {
    return (
        <>
            <header className="layout-default__header" id="myHeader">
                <div className="layout-default__logo">
                    <NavLink to="/" className="logo">
                        <img src="Img/logo.webp" alt="" />
                    </NavLink>
                </div>
                <div className="layout-default__menu">
                    <ul>
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li><NavLink to="/intro">Giới thiệu</NavLink></li>
                        <li>
                            <NavLink to="/categories">Cửa Hàng</NavLink>
                            <ul className="layout-default__menu__submenu">
                                <li><NavLink to="/categories/feature_product">Sản Phẩm Nổi Bật</NavLink></li>
                                <li><NavLink to="/categories/lastest_products">Sản Phẩm Mới Nhất</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/contact">Liên Hệ</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>

                <div className="layout-default__action">
                    <div className="layout-default__search">
                        <input type="text" placeholder="Tìm kiếm..." />
                        <img src="Img/icons-search.svg" alt="Search" />
                    </div>
                    <div className="layout-default__cart">
                        <div className="layout-default__cart-icon">
                            <CartMini />
                        </div>
                    </div>
                    <div className="layout-default__account">
                        <NavLink to="/login">Đăng Nhập</NavLink>
                        <NavLink to="/register">Đăng Ký</NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;