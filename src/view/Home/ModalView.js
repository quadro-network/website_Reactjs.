import React, { useState, useEffect } from 'react';
import './Modal-window.css';
import { images } from './logo_faucet/logoShare.js';
const ModalView = ({ isOpen, onClose }) => {

    const handleContentClick = (event) => {
        event.stopPropagation();
    };



    return isOpen ? (
     
            <div className="modal-window" onClick={onClose}>
                <div className="modal-content-window" onClick={handleContentClick}>
                    <span className="close-window" onClick={onClose}>&times;</span>
                    <div className="modal-body-window">
                        {/* <img src={logo_about} alt="About" className="modal-image" onLoad={handleImageLoad} /> */}
                        <p className='text-window'>  
                        Our Faucet is developed using a technology stack comprising React.js, CSS, Node.js, and MySQL. It leverages the Keplr API for seamless wallet integration on the frontend. We have implemented client-side IP address retrieval and created an intermediate API for validating IP addresses and wallet addresses.

To ensure efficient data management during requests, we utilize an external script that cleans up data stored for more than 24 hours. This ensures the simplicity of data verification at the time of each request. If a similar wallet address or IP address already exists in the database, users receive an error prompt.

Tokens are securely sent to the client upon successful validation. Access to the intermediate API is restricted and requires knowledge of a secret key stored in the .env file. This additional security measure helps protect against unauthorized requests from malicious actors.

Furthermore, we have implemented additional security measures through undisclosed intermediate software to enhance the overall level of protection. These measures are kept confidential to ensure optimal security.

In summary, our Faucet provides a user-friendly experience while prioritizing security and protection against potential threats.
                        </p>
                        
                    </div><div className="mini-images" style={{justifyContent: 'center', textAlign: 'center'}} >
               <a href="https://archway.faucet.stake-take.com/" target='_blank'><img className="mini-images__item" src={images.arch_faucet} alt="Alt" style={{width: 200, height: 40 , borderRadius:' 10px',  marginTop: '10px'}} /></a>  
               <a href="https://humans.faucet.stake-take.com/" target='_blank'><img className="mini-images__item" src={images.humans_faucet} alt="Alt" style={{width: 200, height: 40 ,marginLeft: '30px', borderRadius:' 10px'}} /></a>  
               <a href="https://umee.faucet.stake-take.com/" target='_blank'> <img className="mini-images__item" src={images.umee_faucet} alt="Alt" style={{width: 200, height: 40, borderRadius:' 10px', marginTop: '10px' }} /></a> 
             
               <a href="https://quicksilver.faucet.stake-take.com/" target='_blank'><img className="mini-images__item" src={images.quicksilver_faucet} alt="Alt" style={{width: 200, height: 40 ,marginLeft: '30px', borderRadius:' 10px' }} /></a> 
            </div>
                </div>
            </div>
     
    ) : null;
}

export default ModalView;
