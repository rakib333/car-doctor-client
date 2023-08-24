


const ProductCard = ({ product }) => {

    const { title, price, img } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex justify-center items-center m-7 bg-[#F3F3F3] rounded-xl">
                <img src={img} alt="Shoes" className="rounded-xl p-9 h-[150px] w-[150px]" />
            </div>
            <div className="card-body pt-0 pb-6 items-center text-center">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className="text-2xl text-red-500">${price}</p>
                <div className="card-actions">

                    <button className="btn btn-secondary">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;