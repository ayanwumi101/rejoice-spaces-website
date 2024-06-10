import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import { PricingCard } from '../Cards'



const index = () => {
  return (
      <Box py='80px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          bg='#F6F6F6'
          id='pricing'
      >
          <Stack spacing='60px'>
              <Heading textAlign='center' fontWeight={900} fontSize={[30,50]}>Find Your Perfect Fit</Heading>
              <Flex gap='24px' alignItems='flex-start' flexWrap='wrap' justifyContent='center'>
                  <PricingCard
                      title='RS Delight'
                      price={2000}
                      duration='day'
                      onClick={() => { }}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet']}
                  />
                  <PricingCard
                      title='RS Max'
                      duration='6 days'
                      price={12000}
                      onClick={() => { }}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet', 'Complimentary Snack', 'Free to use headset', 'Sticky Note', '15% off printing and photocopy services']}
                  />
                  <PricingCard
                      title='RS Adventure'
                      price={3000}
                      duration='day'
                      onClick={() => {}}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet', 'Complimentary Snack', 'Free to use headset']}
                  />
              </Flex>
          </Stack>
      </Box>
  )
}

export default index