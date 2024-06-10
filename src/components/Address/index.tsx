import { Box, Flex, Heading, Image, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { ButtonComponent } from '../Button'



const index = () => {
    return (
        <Box w='100%' h='750px'>
            <Flex w='100%' h='750px'>
                <Box w='50%' h='100%'>
                    <Image src='/assets/images/map.png' w='100%' h='100%' objectFit='cover' />
                </Box>
                <Box w='50%' h='100%' bg='#003466' display='flex' alignItems='center' justifyContent='center'>
                    <Stack spacing='20px' w='450px'>
                        <Heading fontSize={50} color='white'>Get in Touch</Heading>
                        <Text fontSize={22} color='white'>
                            We're more than just a co-working space; we're a vibrant community of passionate individuals where collaboration thrives and innovation takes flight.
                        </Text>
                        <ButtonComponent
                            bg='#2E8DE9'
                            color='white'
                            text='Book Now'
                            width='400px'
                            onClick={() => { }}
                        />
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default index