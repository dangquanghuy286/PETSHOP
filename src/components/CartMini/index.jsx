import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";

function CartMini() {
  const cart = useSelector((state) => state.cartReducer);

  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <>
      <div
        className="iconsCartMini"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Căn giữa nội dung
          border: "3px solid #ffd80a", // Giảm độ dày viền để đẹp hơn
          borderRadius: "50%",
          width: "40px", // Định kích thước vòng tròn
          height: "40px",
          position: "relative",
          transition: "all 0.3s ease-in-out", // Hiệu ứng hover
          cursor: "pointer",
        }}
      >
        <Link
          to="/cart"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            position: "relative",
          }}
        >
          <ImCart style={{ color: "#ffd80a", fontSize: "20px" }} />
          {total > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-1px",
                right: "-5px",
                backgroundColor: "#ffd80a",
                color: "red",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {total}
            </span>
          )}
        </Link>
      </div>
    </>
  );
}
export default CartMini;
