import { NavLink } from "react-router-dom";
import Facility from "../Facility";
import Store_Category from "../Home_Category";
import "./Home.scss"
import Featureproduct from "../Home_fea";
function Home() {
    return (
        <>
            <div className="first-banner">
                <div className="first-banner__text">
                    <p className="first-banner__sale">PET-SHOP GIẢM GIÁ 30%</p>
                    <h1 className="first-banner__title">Chúng tôi quan tâm đến thú cưng của bạn!</h1>
                </div>
            </div>

            <Facility />
            <Store_Category />

            <div className="second-banner">
                <div className="second-banner__text">
                    <h5 className="second-banner__discount">"Giảm giá 30% Sản phẩm Hữu cơ"</h5>
                    <h2 className="second-banner__title">
                        Thức ăn ngon & lành mạnh! <br />
                    </h2>
                    <NavLink to="/categories"><button className="second-banner__button">Mua Ngay</button></NavLink>
                </div>
            </div>
            <Featureproduct />
        </>

    );
}
export default Home;
