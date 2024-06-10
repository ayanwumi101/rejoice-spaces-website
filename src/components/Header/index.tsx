import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import TwitterIcon from '../Icons/TwitterIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import SocialIcon from '../SocialIcon'

const index = () => {
  return (
    <Box as='header' boxShadow='md' py='22px'>
        <Box w='75%' mx='auto'>
            <Flex alignItems='center' justifyContent='space-between'>
                  <Box>
                      <Text fontSize={16}><Box as='span' fontWeight={700}>We open from 8am to 7pm</Box>, Monday through Saturday.</Text>
                  </Box>
                  <Box>
                      <Flex alignItems='center' gap='40px'>
                        <SocialIcon href='https://instagram.com' icon={InstagramIcon} />
                        <SocialIcon href='https://twitter.com' icon={TwitterIcon} />
                        <SocialIcon href='https://facebook.com' icon={FacebookIcon} />
                      </Flex>
                  </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default index