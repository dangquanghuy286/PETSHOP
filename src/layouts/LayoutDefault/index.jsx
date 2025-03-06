import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"

import CartMini from "../../components/CartMini";

function LayoutDefault() {
    return (
        <div className="layout-default">
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

                <div className="layout-default__account">
                    {/* {token ? (
                        <NavLink to="/logout">Đăng xuất</NavLink>
                    ) : (
                        <>
                            <NavLink to="/login">Đăng nhập</NavLink>
                            <NavLink to="/register">Đăng ký</NavLink>
                        </>
                    )} */}
                    111
                </div>
                <div className="layout-default__right">
                    <div className="layout-default__cart">
                        {/* <Cart /> */}
                        <CartMini />
                    </div>
                </div>
            </header>
            <main className="layout-default__main"><Outlet /></main>
            <footer className="layout-default__footer" id="footer">
                <hr />
                <div className="layout-default__footer-section1">
                    <div className="layout-default__section1-block1">
                        <img src="Img/email.svg" alt="Email" />
                        <p>Đăng ký nhận tin</p>
                    </div>
                    <div className="layout-default__section1-block2">
                        <input type="email" name="email" id="email" placeholder="Nhập email của bạn:" />
                        <span>Đăng ký</span>
                    </div>
                    <div className="layout-default__section1-block3">
                        <img src="Img/phone.svg" alt="Phone" />
                        <p>Hotline: 123456789</p>
                    </div>
                </div>
                <hr />
                <div className="layout-default__footer-section2">
                    <div className="layout-default__introduce">
                        <h2>GIỚI THIỆU</h2>
                        <p>
                            FOXIC petshop là cửa hàng chuyên cung cấp thức ăn và phụ kiện cho thú cưng tọa lạc tại TP. Đà Nẵng.
                            Đến với FOXIT, khách yêu shopping tận lực, FOXIT tư vấn tận tâm.
                        </p>
                        <img src="Img/xac-nhan-bct.png" alt="Xác nhận bộ công thương" />
                    </div>
                    <div className="layout-default__policy">
                        <h2>CHÍNH SÁCH</h2>
                        <ul>
                            <li><NavLink to="#">Liên hệ</NavLink></li>
                            <li><NavLink to="#">Hình thức thanh toán</NavLink></li>
                            <li><NavLink to="#">Điều khoản dịch vụ</NavLink></li>
                            <li><NavLink to="#">Chính sách vận chuyển</NavLink></li>
                            <li><NavLink to="#">Chính sách đổi trả</NavLink></li>
                            <li><NavLink to="#">Chính sách bảo mật thông tin</NavLink></li>
                        </ul>
                    </div>
                    <div className="layout-default__touch">
                        <h2>THÔNG TIN LIÊN HỆ</h2>
                        <div className="layout-default__cover-contact">
                            <img src="Img/address.svg" alt="Địa chỉ" />
                            <p>123 Quang Trung, Thạch Thang, Hải Châu, Đà Nẵng</p>
                        </div>
                        <div className="layout-default__cover-contact">
                            <img src="Img/phone.svg" alt="SĐT" />
                            <p>123456789</p>
                        </div>
                        <div className="layout-default__cover-contact">
                            <img src="Img/email.svg" alt="Email" />
                            <p>foxicshop2024@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="layout-default__copyRight">Copy Right @2025 by Quang Huy </div>
            </footer>

        </div>
    );
}

export default LayoutDefault;
