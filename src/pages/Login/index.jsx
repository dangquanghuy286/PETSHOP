import "./Login.scss"
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { getUserLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
function Login() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const res = await getUserLogin(email, password);


        if (res.length > 0) {
            alert("Login success")
            navigate("/");
        } else {
            alert("Login fail")
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