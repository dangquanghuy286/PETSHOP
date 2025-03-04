import { NavLink } from "react-router-dom";
import Facility from "../Facility";
import Store_Category from "../Home_Category";
import "./Home.scss"
import Featureproduct from "../Home_fea";
import HomeLatest from "../Home_LastestProduct";
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
            <div class="three-banner">
                <div class="three-banner__container">
                    <div class="three-banner__item">
                        <img src="Img/left_banner.webp" alt="Khuyến mãi lớn" class="three-banner__image" />
                        <div class="three-banner__content">
                            <h5 class="three-banner__subtitle">Chỉ Trong Ngày Hôm Nay</h5>
                            <h4 class="three-banner__title">
                                Khuyến Mãi Lớn <br />
                                Lên Đến 50%
                            </h4>
                        </div>
                    </div>
                    <div class="three-banner__item">
                        <img src="Img/right_banner.webp" alt="Ưu đãi đặc biệt" class="three-banner__image" />
                        <div class="three-banner__content">
                            <h5 class="three-banner__subtitle">Ưu Đãi Đặc Biệt</h5>
                            <h4 class="three-banner__title">
                                Nhận thêm <br />
                                10% Giảm Giá
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <HomeLatest />
            <div className="four-banner">
                <div className="four-banner__food">
                    <img src="Img/big_banner_food.webp" alt="" />
                </div>
                <div className="four-banner__context--left">
                    <div>
                        <h4>Thức Ăn Thật</h4>
                        <p>Thịt và rau củ cấp độ con người trong các công thức đơn giản, được làm cho chó</p>
                    </div>
                    <div>
                        <h4>MOET</h4>
                        <p>An toàn và chất lượng chưa từng có trước đây cho thú cưng</p>
                    </div>
                </div>
                <div className="four-banner__context--right">
                    <div>
                        <h4>Sản Xuất Tươi Mới</h4>
                        <p>Giữ Nguyên Thực Phẩm và Dinh Dưỡng</p>
                    </div>
                    <div>
                        <h4>Được Chấp Thuận Bởi Bác Sĩ Thú Y</h4>
                        <p>Dinh dưỡng vượt qua các tiêu chuẩn ngành công nghiệp cho thú cưng</p>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Home;
