import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const GalleryItem = ({img}) => {
    return (
        <Box w='300px' h='300px' borderRadius='8px'>
            <Image src={img} w='100%' h='100%' objectFit='cover' borderRadius='8px'  />
        </Box>
    )
}

const index = () => {
  return (
    <Box py='80px'>
        <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              slidesPerView={4.2}
              autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
              }}
              style={{ height: '100%', width: '100%', paddingBottom: '70px' }}
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