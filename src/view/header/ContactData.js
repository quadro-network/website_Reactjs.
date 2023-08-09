import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const logos = [
        {
            href: 'https://github.com/StakeTake',
            logo: '/qr/git.svg',
            preview: '/qr/git.png'
        },
        {
            href: 'mailto:support@stake-take.com',
            logo: '/qr/mail.svg',
            preview: '/qr/mail.png'
        },
        {
            href: 'https://www.twitter.com/StakeAndTake',
            logo: '/qr/twitter.svg',
            preview: '/qr/twitter.png'
        },
    ];

    return (
        <div className="sidebar">
            {logos.map((item, index) => (
                <a key={index} href={item.href} className="logo-link" target="_blank" rel="noopener noreferrer">
                    <img src={item.logo} alt="logo" className="logo" />
                    <div
                        className="logo-preview"
                        style={{ backgroundImage: `url(${item.preview})` }}
                    />
                </a>
            ))}
        </div>
    );
};

export default Sidebar;
