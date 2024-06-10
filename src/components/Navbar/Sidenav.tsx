import React from 'react'
import { Box, Image, Text, Flex, Button, VStack } from '@chakra-ui/react'
import { SideNavProps } from '../../utilities/scheme'
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import CloseIcon from '../Icons/CloseIcon';


const Sidenav = ({ setOpenSideNav }: SideNavProps) => {
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
            height='100%'
            bg='rgba(0, 36, 71, 0.5)'
            position='fixed'
            zIndex='2'
            top='0'
            right='0'
            overflow='hidden'
            // onClick={() => setOpenSideNav(false)}
        >
            <Box
                w='50%'
                h='100%'
                bg='rgba(0, 36, 71, 1)'
                py='60px'
                px='20px'
                position='absolute'
                right='0'
            >
                <Button bg='none' p='0' mb='10' _hover={{ bg: 'none', p: 0 }} onClick={() => setOpenSideNav(false)}><CloseIcon /></Button>
                <Flex flexDir='column' color='white'>
                    <VStack color='white' spacing='25px'>
                        {links.map((link, index) => (
                            <Link
                                activeClass="active"
                                to={link.link}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <Text onClick={() => setOpenSideNav(false)} fontSize={16} cursor='pointer' fontWeight={700} borderBottom='2px solid #2E8DE9' pb='15px'>{link.name}</Text>
                            </Link>
                        ))}
                    </VStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default Sidenav