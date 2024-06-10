import { Box, Text } from '@chakra-ui/react'
import React from 'react'



const index = () => {
  return (
    <Box 
        w='100%' 
        h='580px' 
        bgImage='/assets/images/rejoice-1.jpeg'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition='center'
    >
        <Box
            w='100%'
            h='100%'
            bgGradient='linear(to-b, rgba(0, 36, 71, 0.3), rgba(0, 36, 71, 1))'
            display='flex'
            alignItems='center'
            justifyContent='center' p='5'
        >
           <Box maxW='800px' mx='auto' textAlign='center' color='white' fontSize={[18, 24]} fontWeight={500}>
                  <Text>
                      We are curating a dynamic environment of inspiration, infrastructure support spurring innovation and creativity in individuals and businesses yielding profitable results.
                  </Text>
           </Box>
        </Box>
    </Box>
  )
}

export default index