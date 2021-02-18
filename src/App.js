import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { GlobalStyles } from './global';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
// import MenuPage from './MenuPage/MenuPage.js'
import TestimonyPage from './TestimonyPage/TestimonyPage'
import HomePage from './HomePage/HomePage'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
        <div className = "App">
            <GlobalStyles />
            <Header/>
          <Switch>
            <Route path = "/About">
              <AboutPage/>
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
          <Footer/>
        </div>  
    )
  }
}

export default App;
