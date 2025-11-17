import React from "react";
import "./layout.css";
const Footer = () => {
  return (
    <footer className="">
      <div className="foot">
        <div>
          <h3>About</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/coming-soon">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="/coming-soon">Guidelines</a>
            </li>
            <li>
              <a href="/coming-soon">FAQ</a>
            </li>
            <li>
              <a href="/coming-soon">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="/coming-soon">Documentation</a>
            </li>
            <li>
              <a href="/coming-soon">API</a>
            </li>
            <li>
              <a href="/coming-soon">Tools</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/coming-soon">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">© 2025 DevConnect. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
