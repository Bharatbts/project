import React from "react";
import "./AboutPage.css";
import Img from "../assets/about.jpg";
function AboutPage() {
  return (
    <div className="box">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1>About Us</h1>
      <div className="grid">
        <img src={Img} alt="aboutImage"></img>
        <p>
          E-lawyer Hiring is an online platform that connects clients with
          top-rated lawyers across the country. Our mission is to make it easy
          and convenient for anyone to find the legal help they need, no matter
          where they are or what their legal issue may be.
        </p>
        <p>
          We understand that the legal system can be intimidating and confusing,
          which is why we've designed our platform to be user-friendly and
          accessible. With just a few clicks, you can search for lawyers in your
          area, read reviews from other clients, and even schedule a
          consultation.
        </p>
        <p>
          Whether you're dealing with a personal injury, a business dispute, or
          a criminal charge, we've got you covered. Our network of lawyers
          includes experts in every area of law, so you can rest assured that
          you're getting the best possible representation.
        </p>
      </div>
      <footer>
        <p>&copy; E-lawyer Hiring. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
