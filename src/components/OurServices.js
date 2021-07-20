import React from 'react';
import './OurServices.css';

const OurServices = () => {
    return (
        <div className="service-section">
            <div className="service-container">
                <h1 className="service-heading">Our Services</h1>
                <p className="service-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit sapiente accusamus ad libero molestias aliquam, assumenda nemo quia distinctio reiciendis commodi. Voluptate amet quam molestiae! At voluptatem quas quae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit sapiente accusamus ad libero molestias aliquam, assumenda nemo quia distinctio reiciendis commodi. Voluptate amet quam molestiae! At voluptatem quas quae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit sapiente accusamus ad libero molestias aliquam, assumenda nemo quia distinctio reiciendis commodi. Voluptate amet quam molestiae! At voluptatem quas quae.</p>

                <div className="service-box">
                    <div className="container-left">
                        <div className="service-content">
                            <img className="service-image" src="images/service.jpg" alt="No-image" />
                        </div>
                    </div>
                        <div className="container-right">
                            <div className="service-content">
                                <ul className="service-ul">
                                    <li className="service-list">Wedding Bridal Dressing</li>
                                    <li className="service-list">Homecoming Bridal Dressing</li>
                                    <li className="service-list">Going-away Dressing</li>
                                    <li className="service-list">Normal Dressing</li>
                                    <li className="service-list">Hair & Makeup</li>
                                    <li className="service-list">Hair Cutting & Coloring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default OurServices
