import { useLayoutEffect, useEffect } from 'react'
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

function App() {

  useLayoutEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Box>
      <Header />
      <Hero />
      <OurStory />
      <WhyChooseUS />
      <Problems />
      <Overlay />
      <Pricing />
      <Address />
      <Gallery />
      <Footer />
    </Box>
  )
}

export default App
