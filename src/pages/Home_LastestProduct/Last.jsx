
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function LatestPd(props) {
    const { item } = props;
    const cart = useSelector(state => state.cartReducer);
    const ditch = useDispatch();

    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            ditch(updateQuantity(item.id))
        } else {
            ditch(addToCart(item.id, item))
        }
    }

    return (
        <>
            <div className="latest-products__item" key={item.id}>
                <div className="latest-products__image">
                    <img src={item.image} alt={item.name} />
                    <div className="latest-products__tag">-{item.discount}%</div>
                    <div className="latest-products__icons">
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-eye"></i>
                    </div>
                </div>
                <div className="latest-products__details">
                    <div className="latest-products__reviews">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                        ))}
                    </div>
                    <span className="latest-products__sub-category">Số lượng: {item.category}</span>
                    <h6 className="latest-products__name">{item.name}</h6>
                    <div className="latest-products__price">
                        <del>{item.oldPrice.toLocaleString("vi-VN")} VNĐ</del>
                        <span>{item.newPrice.toLocaleString("vi-VN")} VNĐ</span>
                    </div>
                    <button onClick={handleAddToCart} className="latest-products__button">Thêm Vào Giỏ Hàng</button>
                </div>
            </div>
        </>
    )
}
export default LatestPd