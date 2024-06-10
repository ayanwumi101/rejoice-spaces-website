import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'


const index = () => {
  return (
    <Box w='100%' py='16' px={[5,'14']}>
        <Box maxW='980px' mx='auto' p={[5,'8']} borderLeft='3px solid #003466'>
            <Heading fontWeight={900} fontSize={[25,50]} mb='24px'>
                Our Story, Un-caffeinated
            </Heading>
            <Text fontSize={[18,22]}>
                We are a leading hub focused on creating an environment to boost 
                productivity, creativity and camaraderie that will revolutionize the  future of Africa’s workforce.  
            </Text>
        </Box>
    </Box>
  )
}

export default index