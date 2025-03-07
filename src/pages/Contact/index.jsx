import { feedbackUseLogin } from "../../services/contactService";
import "./Contact.scss"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const content = e.target[3].value;


        const options = {
            "fullName": name,
            "email": email,
            "phone": phone,
            "message": content,
            "timestamp": new Date().toISOString()
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
        }

    }

    return (
        <>
            <div className="contact">
                <div className="contact__container">
                    <div className="contact__info">
                        <h2 className="contact__title">FOXIC Liên Hệ</h2>
                        <p className="contact__details">
                            <span role="img" aria-label="location">📍</span> Địa chỉ: Điện Bàn , Quảng Nam
                        </p>
                        <p className="contact__details">
                            <span role="img" aria-label="phone">📱</span> Số điện thoại: 0905920794
                        </p>
                        <p className="contact__details">
                            <span role="img" aria-label="email">✉️</span> Email: foxicpetshop@gmail.com
                        </p>
                    </div>
                    <div className="contact__form-container">
                        <h3 className="contact__form-title">Liên hệ với chúng tôi</h3>
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <input type="text" className="contact__input" placeholder="Họ tên*" required />
                            <input type="email" className="contact__input" placeholder="Email*" required />
                            <input type="tel" className="contact__input" placeholder="Số điện thoại*" required />
                            <textarea className="contact__textarea" placeholder="Nhập nội dung*" required></textarea>
                            <button type="submit" className="contact__button" >Gửi liên hệ của bạn</button>
                        </form>
                    </div>
                    <div className="contact__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30694.530030107788!2d108.27202559999999!3d15.918694400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420fdb3a9b913d%3A0x4561811f610ecc84!2s831!5e0!3m2!1svi!2s!4v1741373446903!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact