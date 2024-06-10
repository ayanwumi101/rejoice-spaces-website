import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import { ServiceCard } from '../Cards'


const index = () => {
  return (
    <Box py='80px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='#F6F6F6'
    >
        <Stack spacing='60px'>
            <Heading textAlign='center' fontWeight={900} fontSize={[30,50]}>How We Solve Your Problems</Heading>
            <Flex gap='24px' flexWrap='wrap' justifyContent='center'>
                <ServiceCard 
                    img='/assets/icons/1.png'
                    title='Workspace Essentials'
                    description='Meeting room, Uninterrupted power supply, Private work area, Complimentary Wi-Fi.'
                />
                <ServiceCard 
                    img='/assets/icons/2.png'
                      title='Productivity Boosters'
                      description=' Printing & photocopy services, Free coffee, Snacks sale, Complimentary headset.'
                />
                <ServiceCard 
                    img='/assets/icons/3.png'
                      title='Professional Services'
                      description='Media & PR publication services.'
                />
                <ServiceCard 
                    img='/assets/icons/4.png'
                      title='Community and Perks'
                      description='Community'
                />
            </Flex>
            <Text textAlign='center' fontSize={[18,22]}>Your productivity hours starts here : <Box as='span' fontWeight={700}>Opens 8am to 7pm</Box> , Monday through Saturday.</Text>
        </Stack>
    </Box>
  )
}

export default index