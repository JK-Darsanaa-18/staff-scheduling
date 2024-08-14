import React from "react";
import { FaInstagram, FaDribbble, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube, url: "https://www.youtube.com" },
    { label: "Instagram", icon: FaInstagram, url: "https://www.instagram.com" },
    { label: "Twitter", icon: FaXTwitter, url: "https://www.twitter.com" },
    { label: "Dribbble", icon: FaDribbble, url: "https://www.dribbble.com" },
  ];

  const companyLinks = [
    { label: "Company", key: "header-1" },
    { label: "Support", key: "item-1-1" },
    { label: "Blog", key: "item-1-2" },
    { label: "Help Center", key: "item-1-3" },
    { label: "Pricing", key: "item-1-4" },
    { label: "Terms & Condition", key: "item-1-5" },
  ];

  return (
    <div className="app-a">
      <div className="footer-container">
        <div>
          <div className="footer-logo">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaWNtjYyjgX_XthAkuB3CdDDBOdp-PqnvJPb1IOwuIUPPIJrgFzOgMUTMnVa1_wmqQaM&usqp=CAU.jpg"
              }
              alt="Company Logo"
            />
            <span>Company name</span>
          </div>
          <div className="footer-infos">
            <span>DAG © 2024 Nexcent ltd.</span>
            <br />
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <a
                  key={`social-${index}`}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                >
                  <Icon className="social-icon" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <ul className="col col-1">
            {companyLinks.map((link, index) => (
              <li
                key={index}
                className={link.key === "header-1" ? "header" : ""}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription Form */}
        <div className="footer-form">
          <label>Stay up to date</label>
          <input
            type="email"
            placeholder="Subscribe to our email"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
