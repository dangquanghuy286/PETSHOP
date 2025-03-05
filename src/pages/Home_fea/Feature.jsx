import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function FItem(props) {
    const { item } = props
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const handleAddtocart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id)); // 
        } else {
            dispatch(addToCart(item.id, item));
        }
    };
    return (<><div className="feature-product__item" key={item.id}>
        <div className="feature-product__image">
            <img src={item.image} alt={item.name} />
            <div className="feature-product__tag">{item.discount}</div>
            <div className="feature-product__icons">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-eye"></i>
            </div>
        </div>
        <div className="feature-product__details">
            <div className="feature-product__reviews">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <span className="feature-product__sub-category">Số lượng:{item.category}</span>
            <h6 className="feature-product__name">{item.name}</h6>
            <div className="feature-product__price">
                <del>{item.oldPrice}đ</del>
                <span>{item.newPrice}đ</span>
            </div>
            <button onClick={handleAddtocart} className="feature-product__button">Thêm Vào Giỏ Hàng</button>
        </div>
    </div></>)
}
export default FItem