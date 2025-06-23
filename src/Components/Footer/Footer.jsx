import FooterLinks from "../FooterLinks/FooterLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer top section */}
      <section className="footer-top">
        <div className="subscribe-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button disabled>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-section">
          <h4 className="desktop-heading">CONTACT US</h4>
          <h4 className="mobile-heading">CALL US</h4>
          <div className="contact-container">
            <a href="tel:+44 2211335360">+44 221 133 5360</a>
            <img src="assets/star-bullet-icon.png" alt="bullet" />
            <a href="customercare@mettamuse.com">customercare@mettamuse.com</a>
          </div>

          <h4 className="currency-title">CURRENCY</h4>
          <img src="assets/currency-icon.png" className="currency-icon" alt="currency" />
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </section>

      <hr />
      {/* Footer links section */}
      <section className="footer-links">
        <FooterLinks title="mettā muse">
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </FooterLinks>

        <FooterLinks title="QUICK LINKS">
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </FooterLinks>

        <span>
        <FooterLinks title="FOLLOW US">
          <div className="social-icons">
            <img src="assets/instagram-icon.png" alt="instagram" className="icon" />
            <img src="assets/linkedin-icon.png" alt="linkedin" className="icon" />
          </div>
        </FooterLinks>
        <h4>mettā muse ACCEPTS</h4>
        <div className="payment-icons">
          <img src="assets/gpay-icon.png" alt="gpay" className="icon" />
          <img src="assets/master-card-icon.png" alt="master card" className="icon" />
          <img src="assets/paypal-icon.png" alt="paypal" className="icon" />
          <img src="assets/amex-icon.png" alt="amex" className="icon" />
          <img src="assets/apple-pay-icon.png" alt="apple pay" className="icon" />
          <img src="assets/pay-icon.png" alt="pay" className="icon" />
        </div>
        </span>


      </section>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
