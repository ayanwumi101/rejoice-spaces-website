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
                    <SocialIcon icon={FooterInstagramIcon} href='https://www.instagram.com/rejoicespace?igsh=cTJta3ZxajJyZndy' />
                    <SocialIcon icon={FooterTwitterIcon} href='https://x.com/Rejoicespaces?t=JkhdbodltYa6I0TX1k_qsw&s=09'        />
                    <SocialIcon icon={FooterFacebookIcon} href='https://www.facebook.com/share/vznT72Rnevs76SL4/?mibextid=qi2Omg' />
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default index