import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FItem({ item }) {
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
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        dispatch(updateQuantity(item.id));
      } else {
        dispatch(addToCart(item));
      }
    }
  };

  return (
    <div className="feature-product__item" key={item.id}>
      <div className="feature-product__image">
        <img src={item.image} alt={item.name} />
        {item.discount > 0 && (
          <div className="feature-product__tag">-{item.discount}%</div>
        )}
        <div className="feature-product__icons">
          <i className="fa-solid fa-heart"></i>
          <Link to={`/featured_products/${item.id}`}>
            <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
      <div className="feature-product__details">
        <div className="feature-product__reviews">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))}
        </div>
        <span className="feature-product__sub-category">
          Số lượng: {item.quantity}
        </span>
        <h6 className="feature-product__name">{item.name}</h6>
        <div className="feature-product__price">
          {item.oldPrice && (
            <del>{item.oldPrice.toLocaleString("vi-VN")} VNĐ</del>
          )}
          <span>{item.newPrice.toLocaleString("vi-VN")} VNĐ</span>
        </div>
        <button onClick={handleAddtocart} className="feature-product__button">
          Thêm Vào Giỏ Hàng
        </button>
      </div>
    </div>
  );
}

export default FItem;
