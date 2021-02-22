import Description from './DescriptionAbout'

import { AboutPageWrapper, AboutPageStory, AboutPageStoryContent,AboutPageArrowDown } from './AboutPage.styled'
export default function AboutPage({ scroll }) {
    return(
        <AboutPageWrapper>
            <AboutPageStory>
                <AboutPageStoryContent scroll = {scroll}>About</AboutPageStoryContent>
                <AboutPageArrowDown scroll = {scroll}>↡</AboutPageArrowDown>
            </AboutPageStory>
            <Description/>
        </AboutPageWrapper>
    )
}