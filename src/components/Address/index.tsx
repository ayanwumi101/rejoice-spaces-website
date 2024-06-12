import { Box, Flex, Heading, Image, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { ButtonComponent } from '../Button'
import { ContactDetailItemProps } from '../../utilities/scheme'
import SocialIcon from '../SocialIcon'
import { ContactFacebookIcon, ContactInstagramIcon, ContactTwitterIcon } from '../Icons/ContactIcons'
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const ContactDetailItem = ({image, title}: ContactDetailItemProps) => {
    return (
        <Box>
            <Flex alignItems='center' gap='20px'>
                <Image src={image} />
                <Text color='white'>{title}</Text>
            </Flex>
        </Box>
    )
}


const index = () => {
    return (
        <Box w='100%' h={['auto','750px']} id='contact'>
            <Flex w='100%' h={['auto','750px']} flexWrap='wrap'>
                <Box w={['100%','50%']} h='100%'>
                    <Image src='/assets/images/map.png' w='100%' h='100%' objectFit='cover' />
                </Box>
                <Box w={['100%','50%']} h='100%' bg='#003466' p={[7,0]} display='flex' alignItems='center' justifyContent='center'>
                    <Stack spacing='20px' maxW='450px'>
                        <Heading fontSize={[30, 50]} bgGradient='linear(to-r, rgba(255, 255, 255, 1), rgba(255,255,255,0.3))'
                            bgClip='text'>Get in Touch</Heading>
                        <Stack spacing='28px'>
                            <ContactDetailItem image='/assets/icons/location.png' title='16 Idowu St, Ojodu, Lagos 101232, Lagos, Lagos, Nigeria 101232' />
                            <ContactDetailItem image='/assets/icons/email.png' title='rejoicespaces@gmail.com' />
                            <ContactDetailItem image='/assets/icons/phone.png' title='+234908866775544' />
                            <Box>
                                <Flex alignItems='center' gap={['0px','35px']}>
                                    <SocialIcon icon={ContactInstagramIcon} href='https://www.instagram.com/rejoicespace?igsh=cTJta3ZxajJyZndy' />
                                    <SocialIcon icon={ContactTwitterIcon} href='https://x.com/Rejoicespaces?t=JkhdbodltYa6I0TX1k_qsw&s=09'        />
                                    <SocialIcon icon={ContactFacebookIcon} href='https://www.facebook.com/share/vznT72Rnevs76SL4/?mibextid=qi2Omg' />
                                </Flex>
                            </Box>
                        </Stack>
                        <Link
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                        <ButtonComponent
                            bg='#2E8DE9'
                            color='white'
                            text='Book Now'
                            width='100%'
                            onClick={() => { }}
                        />
                        </Link>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default index