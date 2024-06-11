import { useLayoutEffect, useEffect, useState, createContext } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurStory from './components/Story'
import WhyChooseUS from './components/WhyChooseUs'
import Problems from './components/Problems'
import Overlay from './components/Overlay'
import Pricing from './components/Pricing'
import Address from './components/Address'
import Gallery from './components/Gallery'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Sidenav from './components/Navbar/Sidenav'



function App() {
  const [openSideNav, setOpenSideNav] = useState(false);
  
  useLayoutEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  useEffect(() => {

    Events.scrollEvent.register('begin');

    Events.scrollEvent.register('end');

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Box>
      <Header />
      <Hero setOpenSideNav={setOpenSideNav} />
      <OurStory />
      <WhyChooseUS />
      <Problems />
      <Overlay />
      <Pricing />
      <Address />
      <Gallery />
      <Footer />
      {openSideNav && <Sidenav setOpenSideNav={setOpenSideNav} />}
    </Box>
  )
}

export default App
