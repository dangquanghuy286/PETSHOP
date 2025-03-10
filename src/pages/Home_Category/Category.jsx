import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ICa(props) {
  const { item } = props;
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập (thay bằng logic thực tế)
    const checkLoginStatus = () => {
      const userLoggedIn = localStorage.getItem("user") ? true : false;
      setLoggedIn(userLoggedIn);
    };
    checkLoginStatus();
  }, []);
  const handleAddtocart = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      if (cart.some((itemCart) => itemCart.id === item.id)) {
        dispatch(updateQuantity(item.id)); //
      } else {
        dispatch(addToCart(item.id, item));
      }
    }
  };
  return (
    <>
      {" "}
      <div className="shop-category__item" key={item.id}>
        <div className="shop-category__image">
          <img src={item.image} alt={item.name} />

          <div className="latest-products__icons">
            <i className="fa-solid fa-heart"></i>
            <Link to={"/categories/" + item.id}>
              <i className="fa-solid fa-eye"></i>
            </Link>
          </div>
        </div>
        <div className="shop-category__details">
          <div className="shop-category__review">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>
          <span className="shop-category__sub-category">
            Số lượng:{item.stock}
          </span>
          <h6 className="feature-product__name">{item.name}</h6>
          <h3 className="shop-category__price">
            {item.price.toLocaleString("vi-VN")} VNĐ
          </h3>
          <button onClick={handleAddtocart} className="shop-category__button">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
}
export default ICa;
