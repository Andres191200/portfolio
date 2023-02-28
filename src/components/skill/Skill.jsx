import './styles.scss';

export default function Skill({ skill }){
    return(
        <div className={`skill ${skill.name.toLowerCase()}-skill`}>
            <div className="skill-icon">
                {skill.icon}
            </div>
            <h3>{skill.name}</h3>
        </div>
    )
}