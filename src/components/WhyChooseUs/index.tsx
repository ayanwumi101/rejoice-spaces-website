import { Box, Flex, Heading, Image, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { ButtonComponent } from '../Button'
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const index = () => {
  return (
    <Box w='100%' h={['auto','770px']}>
        <Flex w='100%' h={['auto','770px']} flexWrap='wrap-reverse'>
            <Box w={['100%','50%']} h='100%' bg='#003466' p={[7,0]} display='flex' alignItems='center' justifyContent='center'>
                <Stack spacing='20px' maxW='500px'>
                    <Heading fontSize={[30,60]}
                    fontWeight={900}
                          bgClip='text'
                          color='white'
                      >Why Choose <br /> <Box as='span' color='#B2C2D1'> Rejoice Spaces? </Box></Heading>
                    <Text fontSize={[16,22]} lineHeight='48px'
                          color='white'
                    >
                          We're more than just a co-working space; we're a vibrant community of passionate <Box as='span' color='#B2C2D1'>individuals where collaboration thrives and innovation takes flight.</Box>
                    </Text>
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
                        onClick={() => {}}
                    />
                    </Link>
                </Stack>
            </Box>
            <Box w={['100%','50%']} h='100%'>
                <Image src='/assets/images/rejoice-1.jpeg' w='100%' h='100%' objectFit='cover' />
            </Box>
        </Flex>
    </Box>
  )
}

export default index