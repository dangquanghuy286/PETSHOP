import Facility from "../Facility";
import Store_Category from "../Home_Category";
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
            <Store_Category />


        </>
    );
}
export default Home;
