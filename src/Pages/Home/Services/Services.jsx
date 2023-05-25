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
        <div className="mt-6">
            <div className="text-center space-y-4">
                <h2 className="text-[#FF3811] font-semibold text-3xl">Services</h2>
                <h3 className="font-bold text-5xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br />  words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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