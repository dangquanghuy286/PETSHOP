import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";
import { getCategoryList } from "../../services/cartegoryService";
import "./Store.scss";

function Store() {
    const [data, setData] = useState([]);
    const [dataCata, setDataCata] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProductList();
            setData(res);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCategoryList();
            setDataCata(res);
        };
        fetchApi();
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <>
            <section className="section-1">
                <div className="banner">
                    <div className="banner__text">
                        <p className="banner__sale">PET-SHOP GIẢM ĐẾN 50%</p>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <h2 className="title">Tất cả sản phẩm</h2>
                <div className="container">
                    {/* Sidebar */}
                    <aside className="sidebar">
                        <h3 className="sidebar__title">Lọc sản phẩm</h3>
                        <select className="sidebar__dropdown" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">Chọn danh mục</option>
                            {dataCata.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        <p className="sidebar__filter">Giá sản phẩm</p>
                        <ul className="sidebar__filter-list">
                            <li className="sidebar__filter-item">
                                <input type="checkbox" /> Giá dưới 100.000đ
                            </li>
                            <li className="sidebar__filter-item">
                                <input type="checkbox" /> 100.000đ - 200.000đ
                            </li>
                            <li className="sidebar__filter-item">
                                <input type="checkbox" /> 200.000đ - 300.000đ
                            </li>
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <main className="main-content">
                        <h2 className="main-content__title">Sản phẩm</h2>
                        <div className="product-grid">
                            {data.length > 0 ? (
                                data.map((product) => (
                                    <div key={product.id} className="product-grid__item">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-grid__image"
                                        />
                                        <p className="product-grid__name">{product.name}</p>
                                        <p className="product-grid__price">{product.price}đ</p>
                                        <button className="product-grid__button">Mua ngay</button>
                                    </div>
                                ))
                            ) : (
                                <p>Đang tải sản phẩm...</p>
                            )}
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default Store;
