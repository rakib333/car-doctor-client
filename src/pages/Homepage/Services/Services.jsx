import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="my-6">
            <hr />
            <div className="text-center space-y-4 my-5">
                <h3 className="text-3xl text-orange-600">Services</h3>
                <h2 className="text-5xl font-bold text-[#151515] ">Our Service Area</h2>
                <p className="text-[#737373] font-normal">The majority have suffered alteration in some form, by injected humour, <br /> or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;