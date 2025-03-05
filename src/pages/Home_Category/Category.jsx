import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ICa(props) {
    const { item } = props;
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const handleAddtocart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id)); // 
        } else {
            dispatch(addToCart(item.id, item));
        }
    };
    return (
        <> <div className="shop-category__item" key={item.id}>
            <div className="shop-category__image">
                <a href="">
                    <img src={item.image} alt={item.name} />
                </a>
                <div className="latest-products__icons">
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-eye"></i>
                </div>
            </div>
            <div className="shop-category__details">
                <div className="shop-category__review">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
                <h4 className="shop-category__name">{item.name}</h4>
                <h3 className="shop-category__price">{item.price}đ</h3>
                <button onClick={handleAddtocart} className="shop-category__button">Thêm vào giỏ hàng</button>
            </div>
        </div></>
    )
}
export default ICa