import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
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
                        <p>Hotline: 0905920794</p>
                    </div>
                </div>
                <hr />
                <div className="layout-default__footer-section2">
                    <div className="layout-default__introduce">
                        <h3>GIỚI THIỆU</h3>
                        <p>
                            FOXIC petshop là cửa hàng chuyên cung cấp thức ăn và phụ kiện cho thú cưng tọa lạc tại tỉnh QUẢNG NAM.
                            Đến với FOXIC, khách yêu shopping tận lực, FOXIC tư vấn tận tâm.
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
                            <p>Điện Nam Trung, Điện Bàn, Quảng Nam, Việt Nam</p>
                        </div>
                        <div className="layout-default__cover-contact">
                            <img src="Img/phone.svg" alt="SĐT" />
                            <p>0905920794</p>
                        </div>
                        <div className="layout-default__cover-contact">
                            <img src="Img/email.svg" alt="Email" />
                            <p>foxicshop@gmail.com</p>
                        </div>

                    </div>
                </div>
                <div className="layout-default__copyRight">Copy Right @2025 by Quang Huy </div>
            </footer>
        </>
    )
}
export default Footer;