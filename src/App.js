import { useRef, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useOnClickOutside } from './Header/Hamburger/hooks';

import { FillerDiv } from './Header/FillerDiv.styled'
import ScrollToTop from './Header/ScrollToTop'
import Header from './Header/Header'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
// import MenuPage from './MenuPage/MenuPage.js'
import TestimonyPage from './TestimonyPage/TestimonyPage'
import HomePage from './HomePage/HomePage'

import { GlobalStyles } from './global';
import './App.css'

export default function App() {

  //handles scroll and position location
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);
  useEffect(() => { window.addEventListener("scroll", handleScroll); }, []);
//handles open close of hamburger
  const node = useRef();
  const [isOpen, setOpen] = useState(false)
  const closeMenu = () => {setOpen(false);}
  useOnClickOutside(node, () => setOpen(false));

  return(
    <div className = "App">
      <GlobalStyles />
      <ScrollToTop />
        <FillerDiv scroll = {scroll}/>
        <Header scroll = {scroll} setOpen = {setOpen} isOpen = {isOpen} closeMenu = {closeMenu} node = {node}/>
      <Switch>
        <Route path = "/About">
          <AboutPage scroll = {scroll}/>
        </Route>
        <Route path = "/Contact">
          <ContactPage/>
        </Route>
        {/* <Route path = "/MenuPage">
          <MenuPage/>
        </Route> */}
        <Route path = "/Testimonies">
          <TestimonyPage/>
        </Route>
        <Route path = "/">
          <HomePage/>
        </Route>
      </Switch>
    </div>  
  )
}
