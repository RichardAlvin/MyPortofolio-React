import "./skill.css";
import { logos } from "../../logoData";


const Skill = () => {
    return (
        <div className="s">
            <div className="title">
                <h1>My Skill</h1>
                <p>Percentage of what I have learned so far and my skill or knowledge about these technologies.</p>
            </div>

            <div className="logo">
                {logos.map((logo) => (
                    <img src={logo.img} alt={logo.name} />
                ))}
            </div>
        </div>
    );
};

export default Skill;
