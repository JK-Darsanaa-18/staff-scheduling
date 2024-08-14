import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homes.css';
import Footer from './Footer';

function Homes() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h2 className="logo">DAG</h2>
          <input type="checkbox" id="menu-toggler" />
          <label htmlFor="menu-toggler" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
            </svg>
          </label>
          <div className="all-links">
            <div>
              <Link to="/"> <button>Home</button></Link>
            </div>
            <div className="login-drop">
              <div onClick={toggleDropdown}>Login</div>
              {showDropdown && (
                <div className="dropdown" onClick={hideDropdown}>
                  <Link to="/admin-login">Admin</Link>
                  <br></br>
                  <Link to="/StaffSignup">Staff</Link>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => window.location.href = '#about'}>About Us</button>
            </div>
            <div>
              <button onClick={() => window.location.href = '#contact'}>Contact Us</button>
            </div>
          </div>
        </nav>
      </header>

      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>Staff Scheduling</h1>
            <p className='hh'>
              Simplify workforce management with our DAG-staff scheduling application.<br></br>
              Streamline your scheduling processes and enhance productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/WM2A4916-1352_thumb.jpg" alt="Monisha Periyasamy" />
            <h3>Monisha</h3>
            <p>Staff Scheduling Manager</p>
          </div>
          <div className="team-card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/774/158/small_2x/portrait-of-smiling-beautiful-business-asian-woman-in-pink-suit-working-in-home-office-desk-using-computer-business-people-employee-freelance-online-marketing-e-commerce-work-from-home-concept-photo.jpg" alt="Priyadharshini" />
            <h3>Priyadharshini</h3>
            <p>Assistant Staff Scheduling Manager</p>
          </div>
          <div className="team-card">
            <img src="https://www.shutterstock.com/image-photo/happy-middle-aged-business-man-600nw-2306186897.jpg" alt="Daya" />
            <h3>Chandran</h3>
            <p>Scheduling Specialist</p>
          </div>
          <div className="team-card">
            <img src="https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=612x612&w=0&k=20&c=BM3E3osJBZSukhs98G6vn7HXe8QQTExGaymi2a61T3E=" alt="Vaishali" />
            <h3>Vaishali</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>
      
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col information">
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> 123 Kovaipudur, Coimbatore - 638312</p>
              <p><i className="fas fa-envelope"></i> dag@skedulo.com</p>
              <p><i className="fas fa-phone"></i> (123) 9944-0067</p>
            </div>
          </div>
          <div className="col form">
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea placeholder="Message*" required></textarea>
              <button id="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homes;
