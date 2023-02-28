import './styles.scss';
import '../skill/styles.scss';
import Skill from "../skill/Skill";
import Skills from "../skills/Skills";
import { DiReact, DiHtml5, DiJavascript1, DiCss3 } from 'react-icons/di';
import { useState } from "react";

const initial = [{
    id:1,
    name:'React Js',
    icon: <DiReact size={80} className="react-icon"/>,
},{
    id:2,
    name:'Javascript',
    icon: <DiJavascript1 size={80} className="javascript-icon"/>
},{
    id:3,
    name:'HTML5',
    icon: <DiHtml5 size={80} className="html-icon"/>
},{
    id:4,
    name:'CSS3/SASS',
    icon: <DiCss3 size={80} className="css-icon"/>
}];


export default function RightSection(){
    const [skills, setSkills] = useState(initial);
    return(
        <section className="right-section">
            <Skills>
                {
                    skills.map((skill) => 
                        <Skill skill={ skill }/>
                    )
                }
            </Skills>
        </section>
    )
}