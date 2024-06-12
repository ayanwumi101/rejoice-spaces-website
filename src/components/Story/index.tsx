import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'


const index = () => {
  return (
    <Box w='100%' py='16' px={[5,'14']}>
        <Box maxW='980px' mx='auto' p={[5,'8']} borderLeft='3px solid #003466'>
            <Heading fontWeight={900} fontSize={[22,50]} mb='24px'
              bgGradient='linear(to-r, rgba(0, 0, 0, 1) 10%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 80%)'
              bgClip='text'
              // textColor='transparent'
            >
                Our Story, Un-caffeinated
            </Heading>
            <Text fontSize={[16,22]}>
                We are a leading hub focused on creating an environment to boost 
                productivity, creativity and camaraderie that will revolutionize the  future of Africa’s workforce.  
            </Text>
        </Box>
    </Box>
  )
}

export default index