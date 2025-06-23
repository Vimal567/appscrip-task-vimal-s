import { useState, useEffect } from "react";
import "./FooterLinks.css";

const FooterLinks = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768); // open by default on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="footer-dropdown">
      <div className="footer-section-header" onClick={() => isMobile && setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        {isMobile ? <img src="assets/expand-white-icon.png" className={`arrow ${isOpen ? "open" : ""}`} alt="expand" /> : null}
      </div>
      {isOpen && <div className="footer-section-body">{children}</div>}
    </div>
  );
};

export default FooterLinks;
