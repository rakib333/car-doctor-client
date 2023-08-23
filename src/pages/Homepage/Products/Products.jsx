import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const limitedProducts = products.slice(0, 6);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])



    const handleShowAll = () => {
        const showAllProducts = products.map(product => product);
        setAllProducts(showAllProducts)
    }


    return (
        <div className="my-7">
            <div className="text-center space-y-4 my-5">
                <h3 className="text-3xl text-orange-600">Services</h3>
                <h2 className="text-5xl font-bold text-[#151515] ">Our Service Area</h2>
                <p className="text-[#737373] font-normal">The majority have suffered alteration in some form, by injected humour, <br /> or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    limitedProducts.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
                {
                    allProducts.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className="text-center mt-5">
                <button onClick={handleShowAll} className="btn btn-outline btn-primary ">See More Products</button>
            </div>
        </div>
    );
};

export default Products;