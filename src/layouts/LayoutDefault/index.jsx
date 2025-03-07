import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
import Header from "./Header";

function LayoutDefault() {


    return (
        <div className="layout-default">
            <Header />
            <main className="layout-default__main"><Outlet /></main>
            <footer className="layout-default__footer" id="footer">

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