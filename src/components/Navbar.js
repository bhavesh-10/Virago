import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        {
            title: "About Us",
            subItems: [
                { name: "Mission & Vision", description: "Online payments" },
                { name: "Team", description: "In-person payments" },
                { name: "Our Story", description: "Payments for platforms" },
                { name: "Partnerships", description: "Subscriptions & invoicing" }
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
            title: "Community",
            subItems: [
                { name: "Forums & Groups", description: "Spend management" },
                { name: "Events & Meetups", description: "Business financing" },
                { name: "Support Services", description: "Spend management" },
                { name: "Inspirational Stories", description: "Spend management" }
            ]
        },
        {
            title: "Support",
            subItems: [
                { name: "User Guides", description: "Fraud & risk management" },
                { name: "FAQ", description: "Custom reports" },
                { name: "Assistance", description: "Startup incorporation" }
            ]
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <span className="brand">Virago</span>
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    &#9776;  {/* Hamburger icon */}
                </button>
                <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
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
            </div>
        </nav>
    );
};

export default Navbar;
