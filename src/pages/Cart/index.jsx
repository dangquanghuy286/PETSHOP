import { useDispatch, useSelector } from "react-redux";
import { deleteALL } from "../../actions/cart";
import CartList from "./CartList";
import "./Cart.scss"
function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const total = cart.reduce((sum, item) => {
        const discount = item.info.discount ?? 0; // Nếu không có discount, mặc định là 0%
        const priceNew = parseFloat(((item.info.price * (100 - discount)) / 100).toFixed(2));
        return sum + priceNew * item.quantity;
    }, 0);

    const handleDeleteAll = () => {
        dispatch(deleteALL())
    }
    return (
        <>
            <h2>Giỏ Hàng</h2>
            <button onClick={handleDeleteAll} className="cart__clear">Xóa Tất Cả</button>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền : <span>{total.toLocaleString("vi-VN")}đ</span>
                        </div>

                    </>
                ) : (
                    <>
                        <div className="cartEmpty">
                            <div className="cartEmpty__Title">
                                <h3>Giỏ hàng trống ... </h3>
                            </div>
                            <div className="cartEmpty__Image">
                                <img src="./Img/nocart.png" alt="Gio hang trong" />
                            </div>
                        </div>
                    </>
                )}
            </div>

        </>
    )
}
export default Cart;