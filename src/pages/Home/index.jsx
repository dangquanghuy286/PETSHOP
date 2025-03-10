import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import Facility from "../Facility";
import Store_Category from "../Home_Category";
import "./Home.scss";
import Featureproduct from "../Home_fea";
import HomeLatest from "../Home_LastestProduct";
function Home() {
  useEffect(() => {
    // Khởi tạo ScrollReveal với các thiết lập chung cho hiệu ứng cuộn
    const sr = ScrollReveal({
      distance: "60px", // Khoảng cách di chuyển của hiệu ứng
      duration: 2500, // Thời gian thực hiện hiệu ứng (2.5 giây)
      delay: 200, // Độ trễ trước khi hiệu ứng bắt đầu (0.4 giây)
      reset: true, // Cho phép hiệu ứng lặp lại khi cuộn trang
    });

    // Áp dụng hiệu ứng xuất hiện từ bên trái cho phần tử có class "first-banner__text"
    sr.reveal(".first-banner__text", { origin: "left" });

    // Áp dụng hiệu ứng xuất hiện từ bên phải cho phần tử có class "second-banner__text"
    sr.reveal(".second-banner__text", { origin: "right" });

    // Áp dụng hiệu ứng xuất hiện từ dưới lên cho từng phần tử có class "three-banner__item"
    // "interval: 200" giúp mỗi phần tử xuất hiện cách nhau 200ms tạo hiệu ứng từng bước

    // Áp dụng hiệu ứng xuất hiện từ bên trái cho phần tử có class "four-banner__context--left"
    sr.reveal(".four-banner__context--left", { origin: "left" });

    // Áp dụng hiệu ứng xuất hiện từ bên phải cho phần tử có class "four-banner__context--right"
    sr.reveal(".four-banner__context--right", { origin: "right" });
  }, []); // Mảng dependency rỗng [] đảm bảo hiệu ứng chỉ được khởi tạo một lần sau khi component render

  return (
    <>
      {/* Banner chính */}
      <div className="first-banner">
        <div className="first-banner__text">
          <p className="first-banner__sale">PET-SHOP GIẢM GIÁ 30%</p>
          <h1 className="first-banner__title">
            Chúng tôi quan tâm đến thú cưng của bạn!
          </h1>
        </div>
      </div>

      {/* Các phần khác */}
      <Facility />
      <Store_Category />

      {/* Banner khuyến mãi */}
      <div className="second-banner">
        <div className="second-banner__text">
          <h5 className="second-banner__discount">
            "Giảm giá 30% Sản phẩm Hữu cơ"
          </h5>
          <h2 className="second-banner__title">Thức ăn ngon & lành mạnh!</h2>
          <NavLink to="/categories">
            <button className="second-banner__button">Mua Ngay</button>
          </NavLink>
        </div>
      </div>

      <Featureproduct />

      {/* Banner sản phẩm nổi bật */}
      <div className="three-banner">
        <div className="three-banner__container">
          <div className="three-banner__item">
            <img
              src="Img/left_banner.webp"
              alt="Khuyến mãi lớn"
              className="three-banner__image"
            />
            <div className="three-banner__content">
              <h5 className="three-banner__subtitle">Chỉ Trong Ngày Hôm Nay</h5>
              <h4 className="three-banner__title">
                Khuyến Mãi Lớn <br /> Lên Đến 50%
              </h4>
            </div>
          </div>
          <div className="three-banner__item">
            <img
              src="Img/right_banner.webp"
              alt="Ưu đãi đặc biệt"
              className="three-banner__image"
            />
            <div className="three-banner__content">
              <h5 className="three-banner__subtitle">Ưu Đãi Đặc Biệt</h5>
              <h4 className="three-banner__title">
                Nhận thêm <br /> 10% Giảm Giá
              </h4>
            </div>
          </div>
        </div>
      </div>

      <HomeLatest />

      {/* Banner cuối cùng */}
      <div className="four-banner">
        <div className="four-banner__food">
          <img src="Img/big_banner_food.webp" alt="" />
        </div>
        <div className="four-banner__context--left">
          <div>
            <h4>Thức Ăn Thật</h4>
            <p>
              Thịt và rau củ cấp độ con người trong các công thức đơn giản, được
              làm cho chó
            </p>
          </div>
          <div>
            <h4>Kiểm định</h4>
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
            <p>
              Dinh dưỡng vượt qua các tiêu chuẩn ngành công nghiệp cho thú cưng
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
