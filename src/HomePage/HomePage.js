import LogoSlogan from './LogoSlogan'
import Container1 from './Container_1'
import Container2 from './Container_2'
import Container3 from './Container_3'
import Container4 from './Container_4'
import Container5 from './Container_5'
import Container6 from './Container_6'

import './HomePage.css'

export default function HomePage() {
    return (
        <div className = "HomePage">
            <LogoSlogan/>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container1/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container2/>
                </div>
            </div>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container3/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container4/>
                </div>    
            </div>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container5/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container6/>
                </div>    
            </div>
        </div>
    )
}