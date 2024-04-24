import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Compus from './Components/Campus/Compus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
import Vedioplayer from './Components/Vedioplayer/vedioplayer';

function App() {
  const[playstate,setPlayState]=useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'> 
      <Title subtitle={'OUR PROGRAM'} title={'What We Offer'}/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle={'GALLERY '} title={'Campus Photos'}/>
      <Compus/>
      <Title subtitle={'TESTIMONIALS '} title={'What Student Says'}/>
      <Testimonials/>
      <Title subtitle={'CONTACT US '} title={'Get in Touch'}/>
      <Contact/>
      <Footer/>
      </div>
    <Vedioplayer playstate={playstate}  setplaystate={setPlayState} />
    </div>
  );
}

export default App;
