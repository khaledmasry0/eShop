import { Col, Container, Row } from "react-bootstrap";
import { images } from "../../constants";
import "./About.css";
import AOS from "aos";
import { Store } from "../../Sections";
AOS.init({
  once: true,
});

const About = () => {
  return (
    <>
      <section className="about">
        <section className="about_img"></section>
        <Store />
        <main className="about_info">
          <Container>
            <div className="about_story" data-aos="fade-up">
              <Row>
                <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                  <div className="about_story_text">
                    <h2>Our Story</h2>
                    <p>
                      Old Spice is a brand my Dad wore in the 1970s and 80s, but
                      the brand itself goes way back to the 1930s. The founder
                      of the Shulton Company, William Lightfoot Schultz, who
                      manufactured the product, chose a nautical theme for the
                      brand. Throughout the years the brand has used colonial
                      sailing ships as a motif. How does it do that? Well, it’s
                      well-written (and very quotable), Now owned by Procter &
                      Gamble, those sailing ships may not be a central theme,
                      but they are still present.
                    </p>
                    <p>
                      The challenge to Old Spice is staying relevant to a
                      younger generation, and this is where the Wieden+Kennedy
                      ad, The Man Your Man Could Smell Like campaign comes into
                      play. The basic premise is not that Old Spice will
                      transform your man into the perfect man, but that Old
                      Spice can make your man smell like the perfect man.
                      “Anything is possible when you smell like a man and not a
                      lady.”
                    </p>
                    <p>
                      Any questions? Let us know in store at 9th floor, X Faisal
                      St, Giza, Egypt or call us on (+2) 0123456789
                    </p>
                  </div>
                </Col>
                <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                  <div className="about_story_image">
                    <img src={images.about1} alt="story img" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="about_mission mb-3" data-aos="fade-up">
              <Row>
                <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                  <div className="about_mission_image">
                    <img src={images.about2} alt="mission img" />
                  </div>
                </Col>
                <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                  <div className="about_mission_text">
                    <h2>Our Mission</h2>
                    <p>
                      The mission of eShop is dedication to the highest quality
                      of customer service delivered with a sense of warmth,
                      friendliness, individual pride, and company spirit. We
                      ignite opportunity by setting the world in motion. human
                      suffering in the face of emergencies by mobilizing the
                      power of volunteers and the generosity of donors. Our
                      mission is to unlock the potential of human creativity —
                      by giving a million creative artists the opportunity to
                      live off their art and billions of fans the opportunity to
                      enjoy and be inspired by it.
                    </p>
                    <p>
                      Creativity is just connecting things. When you ask
                      creative people how they did something, they feel a little
                      guilty because they didn't really do it, they just saw
                      something. It seemed obvious to them after a while.
                      <br />
                      <br /> - Steve Job’s
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </main>
      </section>
    </>
  );
};

export default About;
