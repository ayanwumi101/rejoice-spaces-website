import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'


const FooterFacebookIcon = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
      <svg width={isMobile ? '34' : "44"} height={isMobile ? '34' : "44"} viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44.5" height="44" rx="22" fill="#003466" fill-opacity="0.2" />
          <path d="M24 23.5H26.5L27.5 19.5H24V17.5C24 16.47 24 15.5 26 15.5H27.5V12.14C27.174 12.097 25.943 12 24.643 12C21.928 12 20 13.657 20 16.7V19.5H17V23.5H20V32H24V23.5Z" fill="#003466" />
      </svg>
  )
}

export default FooterFacebookIcon