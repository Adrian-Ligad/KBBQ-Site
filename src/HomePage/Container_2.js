import Gallery from '../Integrations/Gallery'
import { HomePagePics, HomePageCaptions }  from '../pictures/HomePagePics'

export default function Container_2() {
    return(
        <div className = "container">
            <div className = "HomeContainer">
                <Gallery pictures = {HomePagePics} captions = {HomePageCaptions}/>      
            </div>
        </div>
    )
}