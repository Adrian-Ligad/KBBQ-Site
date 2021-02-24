import {LeftArrow, RightArrow } from './Gallery.styled'

import { ModalContainer, ModalContent, CloseButton } from './Modal.styled'

export default function Modal({ modalDisplay, display,changeDisplay, changeModalOpen, pictures, captions }) {
 
    return(
        <ModalContainer modalDisplay = {modalDisplay}>
            <ModalContent>
                <LeftArrow onClick = {() => changeDisplay(-1)}/>
                <img src = {pictures[display]} alt = {`Image ${display}`} 
                width ="600px" height = "400px"></img>
                <RightArrow onClick = {() => changeDisplay(1)}/>
                <CloseButton onClick = {()=> changeModalOpen(false)}>Close</CloseButton>
            </ModalContent>
        </ModalContainer>
    )   
}