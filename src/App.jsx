import { useLayoutEffect } from 'react'
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

function App() {

  useLayoutEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

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
      <Footer />
    </Box>
  )
}

export default App
