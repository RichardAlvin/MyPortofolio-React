import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Richard Alvin Pratama</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Cloud Engineer</div>
              <div className="i-title-item">DevOps Engineer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">IoT Engineer</div>
            </div>
          </div>
          <p className="i-desc">
          I'm a person who is very enthusiastic about learning and easy to adapt. Enthusiastic about Cloud Computing, Backend Programming, DevOps, and IoT.
          </p>
          <nav>
            <ul>
              <li><a href="https://github.com/RichardAlvin"><i class="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/richard-alvin-pratama-b03a27214/"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/richardalvin36/"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
