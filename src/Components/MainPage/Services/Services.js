import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://infinite-island-97956.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

  return (
    <section className="service-container container text-center mt-5">
      <h2>
        Services
      </h2>
        <p className="text-secondary">Repair And Support All  Windows/Linux PC And Service  Apple/Mac Computers.</p>
        <div className="row">
            {
                 services.length === 0 &&<div class="text-center">
                 <div class=" spinner-border text-info" role="status">
                 </div>
               </div>
            }
            {
                services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
            }
        </div>
    </section>
  );
};

export default Services;
