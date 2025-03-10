import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, updateQuantity } from "../../actions/cart";
import { loggedIn } from "../../helpers/loggedIn";

function ProductItem(props) {
  const { product } = props;
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterItem = Array.isArray(product)
    ? product.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleAddtocart = () => {
    if (!loggedIn()) {
      alert("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng.");
      navigate("/login");
      return;
    }

    if (cart.some((itemCart) => itemCart.id === product.id)) {
      dispatch(updateQuantity(product.id));
    } else {
      dispatch(addToCart(product.id, product));
    }
  };

  return (
    <>
      <div className="product-grid__item">
        <img
          src={product.image}
          alt={product.name}
          className="product-grid__image"
        />
        {product.discount && (
          <div className="product-grid__tag">-{product.discount}%</div>
        )}

        <div className="product-grid__icons">
          <i className="fa-solid fa-heart"></i>
          <Link to={"/categories/" + product.id}>
            <i className="fa-solid fa-eye"></i>
          </Link>
        </div>

        <div className="shop-category__details">
          <div className="shop-category__review">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>
          <span className="product-grid__sub-category">
            Số lượng: {product.stock}
          </span>
          <h6 className="product-grid__name">{product.name}</h6>
          {product.discount ? (
            <div className="feature-product__price">
              <del>{product.price.toLocaleString("vi-VN")} VNĐ</del>
              <span>
                {(product.price * (1 - product.discount / 100)).toLocaleString(
                  "vi-VN"
                )}{" "}
                VNĐ
              </span>
            </div>
          ) : (
            <span>{product.price.toLocaleString("vi-VN")} VNĐ</span>
          )}
          <button onClick={handleAddtocart} className="product-grid__button">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
