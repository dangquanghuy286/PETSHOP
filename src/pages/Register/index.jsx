import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { checkUserLogin, registerUserLogin } from "../../services/userService";
import { generateToken } from "../../helpers/generateTonken";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function Register() {
    const navigate = useNavigate();


    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;
        if (password !== confirmPassword) {
            setError("Mật khẩu không khớp");
            return;
        }
        setError("");

        const checkEmail = await checkUserLogin("email", email);

        if (checkEmail.length > 0) {
            setError("Email đã tồn tại");
        } else {
            const options = {
                "fullname": username,
                "email": email,
                "password": password,
                "token": generateToken()
            };
            const res = await registerUserLogin(options);
            if (res) {
                Swal.fire({
                    title: "Đăng ký thành công!",
                    background: "#fff9c4", // Màu nền vàng nhạt
                    color: "#4caf50", // Màu chữ xanh lá cây
                    confirmButtonColor: "#4caf50", // Màu nút xác nhận (xanh lá)
                    icon: "success",
                    draggable: true,
                });
                navigate("/login");
            } else {
                Swal.fire({
                    title: "Đăng ký thất bại, hãy thử lại sau!",
                    icon: "error",
                    background: "#fff9c4",
                    color: "#990000",
                    confirmButtonColor: "#990000",
                    customClass: {
                        popup: 'custom-swal-popup'
                    }
                });
            }
        }
    }
    return (
        <>
            <div className="register">
                <div className="register__container">
                    <form action="" className="register__form" onSubmit={handleSubmit}>
                        <h1 className="register__title">Register</h1>
                        {error && <p className="register__error">{error}</p>}
                        <div className="register__input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUserAlt className="register__icon" />
                        </div>

                        <div className="register__input-box">
                            <input type="email" placeholder="Email" required />
                            <MdEmail className="register__icon" />
                        </div>

                        <div className="register__input-box">
                            <input type="password" placeholder="Password" required />
                            <RiLockPasswordFill className="register__icon" />
                        </div>

                        <div className="register__input-box">
                            <input type="password" placeholder="Confirm Password" required />
                            <RiLockPasswordFill className="register__icon" />
                        </div>

                        <button type="submit" className="register__button">Sign Up</button>

                        <div className="register__login">
                            <p className="register__login-text">Already have an account?</p>
                            <a href="#" className="register__login-link">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register