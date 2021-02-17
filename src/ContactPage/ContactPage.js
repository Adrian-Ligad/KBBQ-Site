import Header from '../Header/Header'
import Location from '../Integrations/Location'
import Call from './CallContact'
import Hours from './BusinessHours'

export default function ContactPage() {
    return (
        <div className = "ContactPage">
            <Location/>
            <Call/>
            <Hours/>
        </div>
    )
}