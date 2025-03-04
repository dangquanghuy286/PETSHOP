import { useEffect, useState } from "react"
import { getfeaList } from "../../services/feaService";
import "./Feature_product.scss"
function Featureproduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getfeaList();
            setData(res)

        }
        fetchApi();
    }, [])
    return (
        <>
            <section id="feature-product" className="feature-product ">
                <div className="feature-product__container">
                    <div className="shop-category__header">
                        <h3 className="shop-category__title">Danh Mục Sản Phẩm</h3>
                        <div className="shop-category__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="feature-product__list">
                        {data.map((item) => (
                            <div className="feature-product__item" key={item.id}>
                                <div className="feature-product__image">
                                    <img src={item.image} alt={item.name} />
                                    <div className="feature-product__tag">-10% Sale</div>
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
                                    <button className="feature-product__button">Thêm Vào Giỏ Hàng</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
export default Featureproduct