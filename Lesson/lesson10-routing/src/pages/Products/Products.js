import { Link } from "react-router-dom";

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>

            <div>
                <Link to="/">Home</Link>
            </div>

        </div>
    );
}

export default Products;