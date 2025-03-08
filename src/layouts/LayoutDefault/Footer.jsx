import { useState } from "react";
import { NavLink } from "react-router-dom";
import { feedbackUseLogin } from "../../services/contactService";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSub = async (e) => {
        e.preventDefault();

        // Kiểm tra email hợp lệ
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Email không hợp lệ");
            return;
        }

        const options = {
            email: email,
            timestamp: new Date().toISOString()
        };
        const res = await feedbackUseLogin(options);
        if (res) {
            Swal.fire({
                title: "Gửi thông tin thành công!",
                background: "#fff9c4", // Màu nền vàng nhạt
                color: "#4caf50", // Màu chữ xanh lá cây
                confirmButtonColor: "#4caf50", // Màu nút xác nhận (xanh lá)
                icon: "success",
                draggable: true,
            });
            setEmail(""); // Reset email input
            setError(""); // Reset error message
        } else {
            setError("Đăng ký thất bại, hãy thử lại sau!");
        }
    };

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
                        <form onSubmit={handleSub}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Nhập email của bạn:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="layout-default__subscribe-btn">Đăng ký</button>
                        </form>
                        {error && <p className="layout-default__message">{error}</p>}
                    </div>
                    <div className="layout-default__section1-block3">
                        <img src="Img/phone.svg" alt="Phone" />
                        <p>Hotline: <a href="tel:0905920794">0905920794</a></p>
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
                            <li><NavLink to="/contact">Liên hệ</NavLink></li>
                            <li><NavLink to="#">Hình thức thanh toán</NavLink></li>
                            <li><NavLink to="/intro">Điều khoản dịch vụ</NavLink></li>
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
                            <p><a href="tel:0905920794">0905920794</a></p>
                        </div>
                        <div className="layout-default__cover-contact">
                            <img src="Img/email.svg" alt="Email" />
                            <p><a href="mailto:foxicshop@gmail.com">foxicshop@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="layout-default__copyRight">Copy Right © 2025 by Quang Huy </div>
            </footer>
        </>
    );
}

export default Footer;