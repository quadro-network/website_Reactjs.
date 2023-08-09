import React from 'react';

const FaucetComp = ({ onModalViewClick }) => {
    return (      

         <div data-speed="1.1" className="gallery__right">

    <div className="text-block gallery__item">
        <h2 className="text-block__h">Our Faucet: First Step in Crypto? Try Test Tokens.</h2>
        <p className="text-block__p">Kickstart or deepen your crypto journey with our Crypto Faucet. Designed for both beginners and seasoned professionals, we provide free test tokens that allow you to explore and navigate the dynamic world of cryptocurrencies. Gain firsthand experience in digital transactions, wallet management, and blockchain interaction without any costs. </p>
        <a onClick={onModalViewClick} className="button_learn">Learn more →</a>
    </div>
    

    <img className="gallery__item" src="img/work/4.png" alt="Alt" />
</div>
);
}
 
export default FaucetComp;