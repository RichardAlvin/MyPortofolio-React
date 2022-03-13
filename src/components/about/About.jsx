import "./about.css";
import aboutme from "../../img/about.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutme}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I'm a person who is very enthusiastic about learning and easy to adapt. Enthusiastic about Cloud Computing, Backend Programming, DevOps, and IoT.
        </p>
        <p className="a-desc">
          I am studying at a Multimedia Nusantara University and currently taking the Bangkit 2022 program (Cloud Computing Path). I have participated in several campus organizations and many positions that I have tried, such as the Volunteer, Event Coordination, Decoration Division, Mentors, Academic Coordinators, Vice Chairpersons (GEAR and ACES). I have also been a laboratory assistant for 6 months.
        </p>
        {/* <div className="a-award">
        
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
