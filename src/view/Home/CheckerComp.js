import React from 'react';
import './Modal-Check.css';
const CheckerComp = ({ onModalCheckClick }) => {
    return (  <div data-speed=".9" className="gallery__left">

    <img className="gallery__item" src="img/work/2.png" alt="Alt" />

    <div className="text-block gallery__item">
        <h2 className="text-block__h"> Disk Checker: Stay Ahead of Your Storage!</h2>
        <p className="text-block__p">Disk Checker: Providing real-time server occupancy checks. Avoid data overflows and manage your digital assets effectively. No more unexpected space shortage surprises!  Streamline your operations, enhance performance, and make informed decisions for better administration. Embrace the future of server space monitoring! </p>
        <a  onClick={onModalCheckClick}  className="button_learn">Learn more →</a>
    </div>

</div> );
}
 
export default CheckerComp;