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
                    <div className="feature-product__heading">
                        <h3 className="feature-product__title">Sản Phẩm Nổi Bật</h3>
                        <div className="feature-product__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="feature-product__list" >
                        {data.map(item => (
                            <div className="feature-product__item" key={item.id}>
                                <div className="feature-product__image">
                                    <img src={item.image} alt="Thức Ăn Cho Chó Nhỏ" />
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
                                    <span className="feature-product__sub-category">Foxic</span>
                                    <h6 className="feature-product__name">Thức Ăn Cho Chó Nhỏ</h6>
                                    <div className="feature-product__price">
                                        <del>200.000</del>
                                        <span>180.000</span>
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