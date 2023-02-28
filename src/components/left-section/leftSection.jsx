import Projects from '../projects/Projects';
import './styles.scss';
export default function LeftSection(){
    return(
        <aside className="left-section main-headline">
            <div>
                <h1 className="hi-text">Hi, i'm </h1><h1 className="name">Andrés</h1>
                <span>And i'm a <small>React Js.</small> Developer</span>
            </div>
            <Projects />
        </aside>
    )
}