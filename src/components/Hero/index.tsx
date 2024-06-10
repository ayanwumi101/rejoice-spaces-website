import { Box, Text, Heading, Image, Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '../Navbar'
import { HeroProps } from '../../utilities/scheme';
import { ButtonComponent } from '../Button';



const SingleHeroCard = ({title, description, image, descriptionWidth}: HeroProps) => {
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
                    w={['90%','70%']}
                    mx='auto'
                    display='flex'
                    alignItems='flex-start'
                    flexDir='column'
                    justifyContent='center'
                    py='60px'
                >
                    <Stack spacing='100px' w='100%'>
                        <Navbar />
                        <Box color='white'>
                            <Box mb='24px' w={['200px',descriptionWidth]}>
                                <Text fontSize={[20,28]}>{description}</Text>
                                <Box w='auto' h='3px' bg='#2E8DE9'></Box>
                            </Box>
                            <Heading mb='48px' fontWeight={900} fontSize={[48,60]}>{title}</Heading>
                            <ButtonComponent 
                                bg='#2E8DE9'
                                color='white'
                                text='Book Now'
                                width='290px'
                                onClick={() => {}}
                            /> 
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}


const index = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <Box w='100%' h='100vh'>
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            style={{ height: '100%', width: '100%' }}
        >
            <SwiperSlide>
                <SingleHeroCard 
                      title='Welcome to Rejoice Spaces'
                      description='Modern co-working space'
                      image='/assets/images/rejoice-1.jpeg'
                      descriptionWidth='350px'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Your Productivity Begins Here'
                      description='Rejoice Spaces'
                      image='/assets/images/rejoice-2.jpeg'
                      descriptionWidth='210px'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Ready to Level up?'
                      description='Rejoice Spaces'
                      image='/assets/images/rejoice-3.jpeg'
                      descriptionWidth='210px'
                />
            </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default index