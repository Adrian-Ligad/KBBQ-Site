import { useState } from 'react'

import { LeftArrow, RightArrow, GalleryContainer, PolaroidContainer, PolaroidImage, Caption } from './Gallery.styled'

export default function Gallery({ pictures, captions }) {
    //changing currently displayed polaroid on page
    const [display,toDisplay] = useState(0)
    const changeDisplay = (number) => {
        if(number > 0) {
            if(display === pictures.length - 1) toDisplay(0)
            else toDisplay(display + 1)
        } 
        else {
            if(display === 0) toDisplay(pictures.length - 1)
            else toDisplay(display - 1)
        }
    }

    return (
        <GalleryContainer>
            <LeftArrow onClick = {() => changeDisplay(-1)}/>
            <PolaroidContainer>
                <PolaroidImage>
                    <img src = {pictures[display]} alt = {`Image ${display}`} 
                    width ="200px" height = "200px"></img>
                    <Caption>
                        {captions[display]}
                    </Caption>
                </PolaroidImage>
            </PolaroidContainer>
            <RightArrow onClick = {() => changeDisplay(1)}/>
        </GalleryContainer>
    )
}