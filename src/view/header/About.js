import React, { useState, useEffect } from 'react';
import './About.css';
import logo_about from './about.png';
import logo from './../_Logo.png';
const url = "https://stake-take.com/";


const About = ({ isOpen, onClose }) => {
 
    const handleContentClick = (event) => {
        event.stopPropagation();
    };

   

    return isOpen ? (
       
          
            <div className="modal" onClick={onClose}>
                <div className="modal-content" onClick={handleContentClick}>
                    <span className="close" onClick={onClose}>&times;</span>
                    <div className="modal-body">
                        <img src={logo_about} alt="About" className="modal-image"  />
                        <div style={{
        textDecoration: 'none',
        marginTop: '30px', 
    }}> <p> Stake-Take has been providing secure blockchain infrastructure across leading Proof-of-Stake protocols in the Cosmos ecosystem. We are a community of experienced validators focused on high-quality and long-term cooperation with blockchains, other validators and delegators.

​

   We trust only proven reliable hosts with the latest equipment, and our validators are equipped with the most modern monitoring and data analysis systems that help maintain their performance, monitor server load, and monitor the status of the validator.

​

   Our team also strives to simplify interaction with the validator for other testnet and mainnet participants by writing various tools and bots that help track the state of the validator, and we are always happy to create IBC relayers between the chains of the Cosmos ecosystem. You can find our developments on our official github.

​

   If you decide to delegate your tokens to our validators, you can be sure that the risks are minimized, and you can get answers to all your questions by contacting our team directly by mail or telegram.
 </p>  <div className="logo-container-about" style={{
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'flex-end',  
    width: '120px',  
    height: '120px', 
marginTop: '20%',
marginLeft: '40%'
}}>
    <a href={url} target="_blank" rel="noopener noreferrer" style={{
        textDecoration: 'none', 
    }}>
        <img src={logo} alt="Logo" style={{
            maxWidth: '100%', 
            height: 'auto', 
        }}/>
    </a>
</div>

                        </div>
                       
                    </div>
                </div>
            </div>
       
    ) : null;
}

export default About;
