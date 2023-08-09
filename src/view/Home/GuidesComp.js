import React from 'react';

const GuidesComp = () => {
    return ( 
        <div data-speed="1.1" className="gallery__right">

            <div className="text-block gallery__item" id="guides-section">
           
                <h2 className="text-block__h" > Node Installation Guides: Our Contribution to Crypto Projects</h2>
                 
                <p className="text-block__p">Gain the essential knowledge and administer your blockchain nodes. Through our comprehensive guides, learn to set up a Telegram bot for real-time node notifications. Equip yourself with the necessary tools for efficient node management and operation. Dive deeper into the world of blockchain with us and optimize your crypto operations. </p>
                <a href="https://github.com/StakeTake/guidecosmos" className="button_learn" target='_blank'>Learn more →</a>
            </div>
      
            <img className="gallery__item" src="img/work/6.png" alt="Alt" /> 
        </div> );
}
 
export default GuidesComp;