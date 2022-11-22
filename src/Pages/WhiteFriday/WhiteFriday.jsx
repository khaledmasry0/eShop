import { Col, Container, Row } from "react-bootstrap";
import "./WhiteFriday.css";
import { images } from "../../constants";
import { useEffect, useRef } from "react";

const BlackFriday = () => {
  const listref = useRef();
  useEffect(() => {
    // console.log(listref);
    const daysspan = listref.current.children[0].firstChild;
    const hoursspan = listref.current.children[1].firstChild;
    const minsspan = listref.current.children[2].firstChild;
    const secsspan = listref.current.children[3].firstChild;
    let myinterval = setInterval(() => {
      let date = new Date("Dec 31, 2022 23:59:59");
      let datenow = new Date();
      let diff = date - datenow;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((diff % (1000 * 60)) / 1000);

      daysspan.textContent = days < 10 ? `0${days}` : days;
      hoursspan.textContent = hours < 10 ? `0${hours}` : hours;
      minsspan.textContent = mins < 10 ? `0${mins}` : mins;
      secsspan.textContent = secs < 10 ? `0${secs}` : secs;

      if (diff === 0) {
        clearInterval(myinterval);
        daysspan.textContent = "B";
        hoursspan.textContent = "O";
        minsspan.textContent = "O";
        secsspan.textContent = "M";
      }
    }, 1000);
  });
  return (
    <section className="WhiteFriday section_padding">
      <Container>
        <Row>
          <Col xs={12}>
            <img src={images.whitefriday} alt="WhiteFriday" />
          </Col>
          <Col xs={12} className="text-center">
            <ul className="WhiteFriday_time" ref={listref}>
              <li>
                <span></span>
                Day
              </li>
              <li>
                <span></span>
                Hours
              </li>
              <li>
                <span></span>
                Mins
              </li>
              <li>
                <span></span>
                Sec
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlackFriday;
