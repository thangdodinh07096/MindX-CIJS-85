import { useState } from "react";
import Product from "../Product/Product";

const productMockData = [
    {
        id: 1,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
    {
        id: 2,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
    {
        id: 3,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
    {
        id: 4,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
    {
        id: 5,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
    {
        id: 6,
        name: "Adidas Shoes",
        productImg: "./product.png",
        selloff: 50,
        price: 123,
        status: true
    },
];

const ProductManagement = () => {
    const [productList, setProductList] = useState(productMockData);

    const productElements = productList.map((product) => (
        <Product {...product} />
    ));

    // let productElements = [];
    // for (let i = 0; i < productList.length; i++) {
    //     const { id, name, productImg, selloff, price, status } = productList[i];
    //     productElements.push(
    //         <Product
    //             id={id}
    //             name={name}
    //             productImg={productImg}
    //             selloff={selloff}
    //             price={price}
    //             status={status}
    //         />
    //     );
    // }

    return (
        <div className="product-list row">
            {productElements}
        </div>
    )
};

export default ProductManagement;
