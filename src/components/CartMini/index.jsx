import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
function CartMini() {
    const cart = useSelector(state => state.cartReducer);

    const total = cart.reduce((sum, item) => {
        return sum + item.quantity
    }, 0)


    return (
        <><Link to="/cart">
            <ImCart />
            <span>{total}</span>
        </Link></>
    )
}
export default CartMini;