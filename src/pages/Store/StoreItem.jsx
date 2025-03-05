function ProductItem(props) {
    const { product } = props;
    return (
        <>
            <div className="product-grid__item">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-grid__image"
                />
                <p className="product-grid__name">{product.name}</p>
                <p className="product-grid__price">{product.price}đ</p>
                <button className="product-grid__button">Mua ngay</button>
            </div>
        </>
    )
}
export default ProductItem;