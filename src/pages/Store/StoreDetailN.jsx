import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import "./StoreDetail.scss"
// StoreDetailAll.jsx
function StoreDetailAll({ item }) {
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
        <div className="product-detail">
            <div className="product-detail__image">
                <img src={item.image} alt={item.name} className="product-detail__image-src" />
            </div>
            <div className="product-detail__info">
                <h2 className="product-detail__info-name">{item.name}</h2>
                <p className="product-detail__info-price">Giá: {item.price.toLocaleString()} VNĐ</p>
                <p className="product-detail__info-unit">Khối lượng: {item.unit}</p>
                <p className="product-detail__info-category">
                    Danh mục: {item.category === 1 ? "Thức ăn cho chó" : "Khác"}
                </p>
                <p className="product-detail__info-rating">Đánh giá: {item.rating} </p>
            </div>
            <div className="product-detail__details">
                <h3 className="product-detail__details-title">Thông tin chi tiết</h3>
                <ul className="product-detail__details-list">
                    <li className="product-detail__details-item"><strong>Thương hiệu:</strong> {item.details.brand}</li>
                    <li className="product-detail__details-item"><strong>Loại:</strong> {item.details.type}</li>
                    <li className="product-detail__details-item"><strong>Phù hợp với:</strong> {item.details.suitable_for}</li>
                    <li className="product-detail__details-item"><strong>Kích thước bao bì:</strong> {item.details.package_size}</li>
                    <li className="product-detail__details-item">
                        <strong>Thành phần chính:</strong>
                        <ul className="product-detail__details-sublist">
                            {item.details.main_ingredients.map((ingredient, index) => (
                                <li key={index} className="product-detail__details-subitem">{ingredient}</li>
                            ))}
                        </ul>
                    </li>
                    <li className="product-detail__details-item"><strong>Công dụng:</strong> {item.details.function}</li>
                </ul>
            </div>
            <div className="product-detail__actions">
                <button onClick={handleAddtocart} className="product-detail__actions-btn product-detail__actions-btn--add-to-cart">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    );
}

export default StoreDetailAll;