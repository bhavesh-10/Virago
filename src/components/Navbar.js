import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const menuItems = [
        {
            title: "Services",
            subItems: [
                { name: "Payments", description: "Online payments" },
                { name: "Terminal", description: "In-person payments" },
                { name: "Connect", description: "Payments for platforms" },
                { name: "Billing", description: "Subscriptions & invoicing" },
                { name: "Billing", description: "Subscriptions & invoicing" }

            ]
        },
        {
            title: "Developers",
            subItems: [
                { name: "Payouts", description: "Programmatic payouts" },
                { name: "Issuing", description: "Card creation" }
            ]
        },
        {
            title: "Financial Services",
            subItems: [
                { name: "Corporate Card", description: "Spend management" },
                { name: "Capital", description: "Business financing" }
            ]
        },
        {
            title: "Business Operations",
            subItems: [
                { name: "Radar", description: "Fraud & risk management" },
                { name: "Sigma", description: "Custom reports" },
                { name: "Atlas", description: "Startup incorporation" }
            ]
        }
    ];

    return (
        <nav className="navbar">
            <ul className="menu">
                {menuItems.map((item, idx) => (
                    <li key={idx} className="menu-item">
                        {item.title}
                        <div className="mega-menu">
                            {item.subItems.map((subItem, subIdx) => (
                                <div key={subIdx} className="mega-menu-item">
                                    <span className="item-name">{subItem.name}</span>
                                    <span className="item-description">{subItem.description}</span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
