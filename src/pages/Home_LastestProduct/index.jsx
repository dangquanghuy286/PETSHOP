import { useEffect, useState } from "react"
import "./Latest.scss"
import { getLatest } from "../../services/cartegoryService copy";
function HomeLatest() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getLatest();
            setData(res)
        }
        fetchApi();
    }, [])
    return (
        <>
            <div id="latest-products" className="latest-products">
                <div className="latest-products__container">
                    <div className="latest-products__header">
                        <h3 className="latest-products__title">Sản Phẩm Mới Nhất</h3>
                        <div className="latest-products__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="latest-products__list">
                        {data.map((item) => (
                            <div className="latest-products__item" key={item.id}>
                                <div className="latest-products__image">
                                    <img src={item.image} alt={item.name} />
                                    <div className="latest-products__tag">-10% Sale</div>
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
                                        <del>{item.oldPrice}đ</del>
                                        <span>{item.newPrice}đ</span>
                                    </div>
                                    <button className="latest-products__button">Thêm Vào Giỏ Hàng</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}
export default HomeLatest