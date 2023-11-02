import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-nine-pi.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className="my-5">
      <div className="text-center mt-4">
        <h3 className="text-orange-500 text-2xl font-bold">Services</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or random <br /> words which do not look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            services.map((service)=><ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
