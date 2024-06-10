import { Box, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'


const index = () => {
  return (
    <Box>
        <Flex alignItems='center' justifyContent='space-between'>
            <Box>
                <Image src='/logo.svg' />
            </Box>
            <Box>
                <Flex alignItems='center' gap='32px' color='white'>
                    <Text fontSize={16} fontWeight={700}>Features</Text>
                    <Text fontSize={16} fontWeight={700}>Pricing</Text>
                    <Text fontSize={16} fontWeight={700}>Contact Us</Text>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default index