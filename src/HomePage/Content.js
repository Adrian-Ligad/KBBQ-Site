import LogoSlogan from './LogoSlogan'
import Announcements from './Announcements'
import About from './About_Home'
import Location from '../Integrations/Location'
import Testimonials from './Testi_Home'



export default function Content() {
    return (
        <div className = "Content">
            <div>content</div>
            <LogoSlogan/>
            <Announcements/>
            <About/>
            <Location/>
            <Testimonials/>
        </div>
    )
}