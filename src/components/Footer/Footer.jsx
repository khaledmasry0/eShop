import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const route = useNavigate();
  return (
    <footer data-aos="fade-up">
      <Container>
        <Row>
          <Col xs={6} md={3} className="mb-5 mb-md-0">
            <p className="footer_title">Categories</p>
            <ul className="footer_list">
              <li>
                <a href="/products">Men</a>
              </li>
              <li>
                <a href="/products">Women</a>
              </li>
              <li>
                <a href="/products">Shoes</a>
              </li>
              <li>
                <a href="/products">Watches</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-5 mb-md-0">
            <p className="footer_title">Help</p>
            <ul className="footer_list">
              <li>
                <a href="/">Track Order</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">Shipping</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <p className="footer_title">Get In Touch</p>
            <address>
              Any questions? Let us know in store at 9th floor, X Faisal St,
              Giza, Egypt or call us on (+2) 0123456789
            </address>
            <ul className="social">
              <li>
                <a href="#/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#/">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <p className="footer_title">Newsletter</p>
            <form action="">
              <input type="text" placeholder="email@examble.com" />
              <div className="focus_input"></div>
            </form>
            <button className="custom_button" onClick={() => route("/")}>
              Subscribe
            </button>
          </Col>
        </Row>
        <div className="copyright">
          Copyright ©2022 All rights reserved | This template is made with &lt;3
          by Khaled
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
