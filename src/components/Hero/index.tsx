import { Box, Text, Heading, Image, Stack, useMediaQuery } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '../Navbar'
import { HeroProps } from '../../utilities/scheme';
import { ButtonComponent } from '../Button';
import { Link, Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { SideNavProps } from '../../utilities/scheme';


const SingleHeroCard = ({title, description, image, descriptionWidth, setOpenSideNav}: HeroProps) => {
    return (
        <Box
            bgImage={image}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            width='100vw'
            height='100vh'
            backgroundPosition='center'
        >
            <Box 
                w='100%' 
                h='100%'
                zIndex='2'
                bgGradient='linear(to-b, rgba(0, 36, 71, 0.3), rgba(0, 36, 71, 1))'
            >
                <Box 
                    w={['90%','65%']}
                    mx='auto'
                    display='flex'
                    alignItems='flex-start'
                    flexDir='column'
                    justifyContent='center'
                    py='60px'
                >
                    <Stack spacing='100px' w='100%'>
                        <Navbar setOpenSideNav={setOpenSideNav} />
                        <Box color='white'>
                            <Box mb='24px' w={[descriptionWidth[0],descriptionWidth[1]]}>
                                <Text fontSize={[20,28]}>{description}</Text>
                                <Box w='auto' h='3px' bg='#2E8DE9'></Box>
                            </Box>
                            <Heading mb='48px' fontWeight={[600,500]} lineHeight={['50px','100px']} fontSize={[45,100]}>{title}</Heading>
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
                                width='290px'
                                onClick={() => {}}
                            /> 
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}


const index = ({ setOpenSideNav }: SideNavProps) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box w='100%' h='100vh'>
        <Swiper
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            style={{ height: '100%', width: '100%' }}
        >
            <SwiperSlide>
                <SingleHeroCard 
                      title='Welcome to Rejoice Spaces'
                      description='Modern co-working space'
                      image='/assets/images/rejoice-1.jpeg'
                      descriptionWidth={['220px','300px']}
                      setOpenSideNav={setOpenSideNav}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Your Productivity Begins Here'
                      description='Rejoice Spaces'
                      image='/assets/images/rejoice-2.jpeg'
                      descriptionWidth={['130px','180px']}
                      setOpenSideNav={setOpenSideNav}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Ready to Level up?'
                      description='Rejoice Spaces'
                      image='/assets/images/rejoice-3.jpeg'
                      descriptionWidth={['130px','180px']}
                      setOpenSideNav={setOpenSideNav}
                />
            </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default index