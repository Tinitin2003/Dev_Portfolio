import React from 'react';
import { Header,Projects,Footer} from './container';
import { Navbar,PopUp } from './components';
import './App.scss';

const App = () =>{
  
  return(
  <div className="app">
    <div>
    <Navbar />
    <Header />
    {/*<About />*/}
    <Projects />
    {/*<Skills />*/}
    {/*<Testimonial />*/}
    <Footer />
    </div>
    <PopUp/>
  </div>
)};

export default App;
