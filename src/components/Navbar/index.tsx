import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import BarIcon from '../Icons/BarIcon'


const index = () => {
  return (
    <Box>
        <Flex alignItems='center' justifyContent='space-between'>
            <Box>
                <Image src='/logo.svg' />
            </Box>
            <Box display={['none', 'block']}>
                <Flex alignItems='center' gap='32px' color='white'>
                    <Text fontSize={16} fontWeight={700}>Features</Text>
                    <Text fontSize={16} fontWeight={700}>Pricing</Text>
                    <Text fontSize={16} fontWeight={700}>Contact Us</Text>
                </Flex>
            </Box>
            <Button bg='none' p='0' _hover={{bg: 'none', padding: 0}} display={['block', 'none']}><BarIcon /></Button>
        </Flex>
    </Box>
  )
}

export default index