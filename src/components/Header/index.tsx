import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import TwitterIcon from '../Icons/TwitterIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import SocialIcon from '../SocialIcon'

const index = () => {
  return (
    <Box as='header' boxShadow='md' py={['20px','22px']}>
        <Box w={['93%','75%']} mx='auto'>
            <Flex alignItems='center' justifyContent='space-between'>
                  <Box>
                      <Text fontSize={[11,16]}><Box as='span' fontWeight={700}>We open from 8am to 7pm</Box>, Monday through Saturday.</Text>
                  </Box>
                  <Box>
                      <Flex alignItems='center' gap={['10px','40px']}>
                        <SocialIcon href='https://www.instagram.com/rejoicespace?igsh=cTJta3ZxajJyZndy'   icon={InstagramIcon} />
                        <SocialIcon href='https://x.com/Rejoicespaces?t=JkhdbodltYa6I0TX1k_qsw&s=09'            icon={TwitterIcon} />
                        <SocialIcon href='https://www.facebook.com/share/vznT72Rnevs76SL4/?mibextid=qi2Omg'   icon={FacebookIcon} />
                      </Flex>
                  </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default index