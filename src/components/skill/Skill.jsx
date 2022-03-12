import "./skill.css";
import { logos } from "../../logoData";


const Skill = () => {
    return (
        <div class="s">
            <div class="title">
                <h1>My Skill</h1>
                <p>Percentage of what I have learned so far and my skill or knowledge about these technologies.</p>
            </div>

            <div class="logo">
                {logos.map((logo) => (
                    <img src={logo.img} alt={logo.name} />
                ))}
            </div>
        </div>
    );
};

export default Skill;
