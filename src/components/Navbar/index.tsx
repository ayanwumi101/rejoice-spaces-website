import { Box, Image, Text, Flex, Button, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'
import BarIcon from '../Icons/BarIcon'
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { SideNavProps, NavbarProps } from '../../utilities/scheme';


const index = ({ setOpenSideNav }: NavbarProps) => {
  return (
    <Box>
        <Flex alignItems='center' justifyContent='space-between'>
            <Box>
                <Image src='/logo.svg' />
            </Box>
            <Box display={{base:'none', md:'block', lg: 'block'}}>
                <Flex alignItems='center' gap='32px' color='white'>
                      <Link
                          activeClass="active"
                          to="features"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}                        
                      >
                        <Text fontSize={16} cursor='pointer' fontWeight={600}>Features</Text>
                      </Link>
                      <Link
                          activeClass="active"
                          to="pricing"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                      >
                          <Text fontSize={16} cursor='pointer' fontWeight={600}>Pricing</Text>
                      </Link>
                      <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                      >
                          <Text fontSize={16} cursor='pointer' fontWeight={600}>Contact Us</Text>
                      </Link>
                </Flex>
            </Box>
            <Button bg='none' p='0' _hover={{ bg: 'none', padding: 0 }} display={{ base: 'block', md: 'none', lg: 'none' }} onClick={() => setOpenSideNav(true)}><BarIcon /></Button>
        </Flex>
    </Box>
  )
}

export default index