import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, updateQuantity } from "../../actions/cart";
import { loggedIn } from "../../helpers/loggedIn";


function ProductItem(props) {
    const { product } = props;
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddtocart = () => {
        if (!loggedIn()) {
            alert("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng.");
            navigate("/login");
            return;
        }

        if (cart.some(itemCart => itemCart.id === product.id)) {
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
                <p className="product-grid__name">{product.name}</p>
                <p className="product-grid__price">{product.price}đ</p>
                <button onClick={handleAddtocart} className="product-grid__button">Mua ngay</button>
            </div>
        </>
    );
}

export default ProductItem;