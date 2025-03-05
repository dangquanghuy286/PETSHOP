import { useEffect, useState } from "react"
import { getfeaList } from "../../services/feaService";
import "./Feature_product.scss"

import FItem from "./Feature";
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
                        <h3 className="shop-category__title">Sản phẩm nổi bật</h3>
                        <div className="shop-category__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="feature-product__list">
                        {data.map((item) => (
                            <FItem key={item.id} item={item} />
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
export default Featureproduct