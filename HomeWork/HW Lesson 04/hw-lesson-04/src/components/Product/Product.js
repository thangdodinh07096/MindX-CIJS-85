import "./Product.css";

const Product = (props) => {
    const { id, name, productImg, selloff, price, status } = props || {};
    return (
        <div className='product-item col-3'>
            <img src={productImg}></img>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </p>
            <span>{selloff}% Off</span>
            <p>$ {price}</p>
            <span>
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            <p>Available</p>
        </div>
    );
};

export default Product;