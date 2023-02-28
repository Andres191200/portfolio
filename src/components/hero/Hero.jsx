import './styles.scss';
import LeftSection from '../left-section/leftSection';
import RightSection from '../right-section/RightSection';

export default function Hero(){
    return(
        <div className="hero">
            <LeftSection />
            <RightSection />
        </div>
    )
}