import "./Login.scss"
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { getUserLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const res = await getUserLogin(email, password);


        if (res.length > 0) {
            Swal.fire({
                title: "Thành công!",
                background: "#fff9c4", // Màu nền vàng nhạt
                color: "#4caf50", // Màu chữ xanh lá cây
                confirmButtonColor: "#4caf50", // Màu nút xác nhận (xanh lá)
                icon: "success",
                draggable: true,

            });

            setCookie("id", res[0].id, 1);
            setCookie("name", res[0].fullname, 1);
            setCookie("email", res[0].email, 1);
            setCookie("token", res[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/");

        } else {
            Swal.fire({
                title: "Đăng nhập thất bại, hãy thử lại sau!",
                icon: "error",
                background: "#fff9c4",
                color: "#990000",
                confirmButtonColor: "#990000", // Màu nút xác nhận (đỏ)
                customClass: {
                    popup: 'custom-swal-popup' // Lớp CSS tùy chỉnh
                }
            });

        }
    }
    return (
        <>
            <div className="login">
                <div className="login__container">
                    <form action="" className="login__form" onSubmit={handleSubmit}>
                        <h1 className="login__title">Login</h1>

                        <div className="login__input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUserAlt className="login__icon" />
                        </div>

                        <div className="login__input-box">
                            <input type="password" placeholder="Password" required />
                            <RiLockPasswordFill className="login__icon" />
                        </div>

                        <div className="login__options">
                            <label className="login__checkbox">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="login__forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="login__button">Login</button>

                        <div className="login__register">
                            <p className="login__register-text">Don't have an account?</p>
                            <a href="#" className="login__register-link">Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login