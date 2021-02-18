import LogoSlogan from './LogoSlogan'
import About from './About_Home'
import Location from '../Integrations/Location'
import Testimonials from './Testi_Home'

import './HomePage.css'

export default function HomePage() {
    return (
        <div className = "HomePage">
            <LogoSlogan/>
            <About/>
            <Location/>
            <Testimonials/>
        </div>
    )
}