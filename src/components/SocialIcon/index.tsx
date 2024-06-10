import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { SocialIconProps } from '../../utilities/scheme'

const index = ({icon, href}: SocialIconProps) => {
  return (
    <Box as='a' w={['30%', 'auto']} href={href} target='_blank'>
        <Icon as={icon} />
    </Box>
  )
}

export default index

