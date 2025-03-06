// Detail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoreDetailAll from "./StoreDetailN";
// Import từ file khác

function Detail() {
    const { id } = useParams(); // Lấy id từ URL
    const [post, setPost] = useState(null); // Khởi tạo post là null
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading

    useEffect(() => {
        setLoading(true); // Bật loading khi bắt đầu fetch
        fetch(`http://localhost:3002/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("API data:", data); // Debug dữ liệu API
                setPost(data); // Giả sử API trả về một object sản phẩm
                setLoading(false); // Tắt loading khi có dữ liệu
            })
            .catch(error => {
                console.error("Error fetching product:", error);
                setLoading(false); // Tắt loading nếu lỗi
            });
    }, [id]); // Fetch lại khi id thay đổi

    if (loading) {
        return <p>Đang tải...</p>;
    }

    if (!post) {
        return <p>Không tìm thấy sản phẩm</p>;
    }

    return (
        <div className="product-detail-container">
            <h1 className="product-detail-container__title">Chi tiết sản phẩm</h1>
            <StoreDetailAll item={post} key={post.id} /> {/* Truyền post trực tiếp */}
        </div>
    );
}

export default Detail;