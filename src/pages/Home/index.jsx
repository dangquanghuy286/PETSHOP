import Facility from "../Facility";
import "./Home.scss"
function Home() {
    return (
        <>
            <div className="banner">
                <div className="banner__text">
                    <p className="banner__sale">PET-SHOP GIẢM GIÁ 30%</p>
                    <h1 className="banner__title">Chúng tôi quan tâm đến thú cưng của bạn!</h1>
                </div>
            </div>
            <Facility />
            <section className="shop-category">
                <div className="shop-category__container">
                    <div className="shop-category__header">
                        <h3 className="shop-category__title">Danh Mục Sản Phẩm</h3>
                        <div className="shop-category__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="shop-category__list">
                        <div className="shop-category__item">
                            <div className="shop-category__image">
                                <a href="detail.html?product=dog_food">
                                    <img src="Img/dogs_food.webp" alt="Thức Ăn Cho Chó" />
                                </a>
                            </div>
                            <div className="shop-category__details">
                                <div className="shop-category__review">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4 className="shop-category__name">Thức Ăn Cho Chó</h4>
                                <h3 className="shop-category__price">25.000</h3>
                                <p className="shop-category__description">Mô Tả Sản Phẩm</p>
                                <button className="shop-category__button">Thêm vào giỏ hàng</button>
                            </div>
                        </div>

                        <div className="shop-category__item">
                            <div className="shop-category__image">
                                <a href="detail.html?product=cat_food">
                                    <img src="Img/cats_food.webp" alt="Thức Ăn Cho Mèo" />
                                </a>
                            </div>
                            <div className="shop-category__details">
                                <div className="shop-category__review">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4 className="shop-category__name">Thức Ăn Cho Mèo</h4>
                                <h3 className="shop-category__price">28.000</h3>
                                <p className="shop-category__description">Mô Tả Sản Phẩm</p>
                                <button className="shop-category__button">Thêm vào giỏ hàng</button>
                            </div>
                        </div>

                        <div className="shop-category__item">
                            <div className="shop-category__image">
                                <a href="detail.html?product=bird_food">
                                    <img src="Img/a..webp" alt="Thức Ăn Cho Chim" />
                                </a>
                            </div>
                            <div className="shop-category__details">
                                <div className="shop-category__review">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4 className="shop-category__name">Thức Ăn Cho Chim</h4>
                                <h3 className="shop-category__price">29.000</h3>
                                <p className="shop-category__description">Mô Tả Sản Phẩm</p>
                                <button className="shop-category__button">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-category">
                <div className="shop-category__container">
                    <div className="shop-category__header">
                        <div className="shop-category__icon">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="shop-category__pet-list">
                        <div className="shop-category__pet-item">
                            <div className="shop-category__pet-image">
                                <img src="Img/dog.webp" alt="Thức Ăn Cho Chó" />
                            </div>
                            <h4 className="shop-category__pet-name">Thức Ăn Cho Chó</h4>
                        </div>
                        <div className="shop-category__pet-item">
                            <div className="shop-category__pet-image">
                                <img src="Img/cat.webp" alt="Thức Ăn Cho Mèo" />
                            </div>
                            <h4 className="shop-category__pet-name">Thức Ăn Cho Mèo</h4>
                        </div>
                        <div className="shop-category__pet-item">
                            <div className="shop-category__pet-image">
                                <img src="Img/bird.webp" alt="Thức Ăn Cho Chim" />
                            </div>
                            <h4 className="shop-category__pet-name">Thức Ăn Cho Chim</h4>
                        </div>
                        <div className="shop-category__pet-item">
                            <div className="shop-category__pet-image">
                                <img src="Img/rabit.webp" alt="Thức Ăn Cho Thỏ" />
                            </div>
                            <h4 className="shop-category__pet-name">Thức Ăn Cho Thỏ</h4>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Home;
