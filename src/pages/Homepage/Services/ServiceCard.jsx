import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, price, img } = service;

    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="px-7 pt-7">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mb-4">{title}</h2>

                <div className="card-actions flex items-center">
                    <p className="text-xl text-orange-500">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-xl text-orange-500 flex items-center"><FaArrowRight /> <span>Book Now</span></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;