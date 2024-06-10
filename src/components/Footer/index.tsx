import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SocialIcon from  '../SocialIcon'
import FooterFacebookIcon from '../Icons/FooterFacebookIcon'
import FooterInstagramIcon from '../Icons/FooterInstagramIcon'
import FooterTwitterIcon from '../Icons/FooterTwitterIcon'


const index = () => {
  return (
    <Box py='30px' borderTop='2px solid lightgray'>
        <Flex alignItems='center' justifyContent={['center','space-between']} w={['95%','80%']} mx='auto' flexWrap='wrap-reverse'>
            <Box>
                <Text fontSize={[14, 16]}>Copywright © Rejoice Spaces, {new Date().getFullYear()}</Text>
            </Box>
            <Box mb={[5, 0]}>
                <Flex alignItems='center' gap={['10px','38px']} color='white'>
                    <SocialIcon icon={FooterInstagramIcon} href='https://instagram.com' />
                    <SocialIcon icon={FooterTwitterIcon} href='https://instagram.com' />
                    <SocialIcon icon={FooterFacebookIcon} href='https://instagram.com' />
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default index