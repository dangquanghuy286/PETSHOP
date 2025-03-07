import { useEffect, useState } from "react"
import "./Latest.scss"
import { getLatest } from "../../services/latestService";
import LatestPd from "./Last";
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
                            <LatestPd item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}
export default HomeLatest