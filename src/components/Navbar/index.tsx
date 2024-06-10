import { Box, Image, Text, Flex, Button, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'
import BarIcon from '../Icons/BarIcon'
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { SideNavProps } from '../../utilities/scheme';

export const SideNav = ({setOpenSideNav}:SideNavProps) => {
    const links = [
        {
            name: 'Features',
            link: 'features'
        },
        {
            name: 'Pricing',
            link: 'pricing'
        },
        {
            name: 'Contact Us',
            link: 'contact'
        }
    ]
    return (
        <Box
            width='100%'
            height='100vh'
            bg='rgba(0, 36, 71, 0.3)'
            position='relative'
            zIndex='2'
            top='0'
            right='0'
        >
            <Box 
                w='150px'
                h='100%'
                bg='rgba(0, 36, 71, 1)'
                p='20px'
            >
                <Flex flexDir='column' gap='20px' color='white'>
                    <VStack color='white'>
                        {links.map((link, index) => (
                            <Link
                                activeClass="active"
                                to={link.link}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <Text fontSize={16} cursor='pointer' fontWeight={700}>{link.name}</Text>
                            </Link>
                        ))}
                    </VStack>
                </Flex>
            </Box>
        </Box>
    )
}



const index = () => {
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
                        <Text fontSize={16} cursor='pointer' fontWeight={700}>Features</Text>
                      </Link>
                      <Link
                          activeClass="active"
                          to="pricing"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                      >
                          <Text fontSize={16} cursor='pointer' fontWeight={700}>Pricing</Text>
                      </Link>
                      <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                      >
                          <Text fontSize={16} cursor='pointer' fontWeight={700}>Contact Us</Text>
                      </Link>
                </Flex>
            </Box>
            <Button bg='none' p='0' _hover={{ bg: 'none', padding: 0 }} display={{ base: 'block', md: 'none', lg: 'none' }} onClick={() => setOpenSideNav(true)}><BarIcon /></Button>
        </Flex>
    </Box>
  )
}

export default index