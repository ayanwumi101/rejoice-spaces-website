import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'


const FacebookIcon = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <svg width={isMobile ? '18' : "21"} height={isMobile ? '18' : "20"} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 11.5H10L11 7.5H7.5V5.5C7.5 4.47 7.5 3.5 9.5 3.5H11V0.14C10.674 0.0970001 9.443 0 8.143 0C5.428 0 3.5 1.657 3.5 4.7V7.5H0.5V11.5H3.5V20H7.5V11.5Z" fill="#003466" />
    </svg>
  )
}

export default FacebookIcon