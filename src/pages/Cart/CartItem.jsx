import { useRef } from "react";
import { CgRemoveR } from "react-icons/cg";
import { CgAddR } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
function CartItem(props) {
    const { item } = props;
    // Tạo một tham chiếu để truy cập vào input quantity
    const inputRef = useRef();

    // Lấy hàm dispatch từ Redux để gửi action
    const dispatch = useDispatch();

    // Hàm xử lý khi nhấn nút tăng số lượng
    const handleUp = () => {
        // Gửi action cập nhật số lượng tăng lên 1 (mặc định trong updateQuantity)
        dispatch(updateQuantity(item.id));
        // Cập nhật giá trị hiển thị trong input: chuyển giá trị hiện tại từ chuỗi sang số rồi cộng thêm 1
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }

    // Hàm xử lý khi nhấn nút giảm số lượng
    const handleDown = () => {
        if (item.quantity > 1) {
            // Gửi action cập nhật số lượng giảm đi 1 (truyền thêm -1 để giảm)
            dispatch(updateQuantity(item.id, -1));
            // Cập nhật giá trị hiển thị trong input: chuyển giá trị hiện tại từ chuỗi sang số rồi trừ đi 1
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    }
    const handleDelete = () => {
        dispatch(deleteItem(item.id))
    }
    return (
        <>
            <div className="cart__item">
                {/* Phần hiển thị hình ảnh sản phẩm */}
                <div className="cart__image">
                    <img src={item.info.image} alt={item.info.title} />
                </div>

                {/* Phần hiển thị thông tin sản phẩm */}
                <div className="cart__content">
                    <h4 className="cart__title">
                        {item.info.title}
                    </h4>

                    {/* Hiển thị giá mới sau khi áp dụng giảm giá, nếu có discount */}
                    <div className="cart__price-new">
                        {item.info.discount ?
                            ((item.info.price * (100 - item.info.discount)) / 100).toFixed(2) :
                            item.info.price}
                    </div>

                    {/* Hiển thị giá gốc nếu có giảm giá */}
                    {item.info.discount && (
                        <div className="cart__price-old">
                            {item.info.price}
                        </div>
                    )}
                </div>


                {/* Phần điều chỉnh số lượng sản phẩm */}
                <div className="cart__quantity">
                    {/* Nút giảm số lượng */}
                    <button onClick={handleDown}>
                        <CgRemoveR />
                    </button>
                    {/* Input hiển thị số lượng, sử dụng ref để cập nhật giá trị */}
                    <input ref={inputRef} defaultValue={item.quantity} />
                    {/* Nút tăng số lượng */}
                    <button onClick={handleUp}>
                        <CgAddR />
                    </button>
                </div>

                {/* Nút xoá sản phẩm khỏi giỏ hàng */}
                <button onClick={handleDelete} className="button__Delete">
                    <RiDeleteBin6Line />
                </button>
            </div>
        </>
    )
}
export default CartItem;