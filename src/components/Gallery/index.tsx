import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const GalleryItem = ({img}) => {
    return (
        <Box w={['150px','300px']} h={['150px','300px']} borderRadius='8px'>
            <Image src={img} w='100%' h='100%' objectFit='cover' borderRadius='8px'  />
        </Box>
    )
}

const index = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <Box py='80px' margin='auto'>
        <Swiper
              pagination={{ clickable: true }}
              modules={[Autoplay]}
              className="mySwiper"
              slidesPerView={isMobile ? 2.4 : 4.2}
              autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
              }}
              style={{ height: '100%', width: '100%'}}
        >
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-1.jpeg' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-2.jpeg' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-3.jpeg' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-4.png' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-2.jpeg' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-1.jpeg' />
            </SwiperSlide>
            <SwiperSlide>
                <GalleryItem img='/assets/images/rejoice-3.jpeg' />
            </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default index