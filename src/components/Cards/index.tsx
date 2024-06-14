import React from "react"
import { Box, Stack, Heading, Text, Image, VStack, Button } from "@chakra-ui/react"
import { ServiceCardProps, PricingCardProps } from "../../utilities/scheme"
import { ButtonComponent } from "../Button"


export const ServiceCard = ({img, title, description}: ServiceCardProps) => {
    return (
        <Box w={['47%','250px']} bg='white' h='auto' boxShadow='md' borderRadius='12px' py={[5,'8']} px={[2,'4']}>
            <Stack spacing={['20px','28px']}>
                <Image src={img} display='block' mx='auto' />
                <Heading fontSize={[16,20]} lineHeight='30px' textAlign='center' color='#003466'>{title}</Heading>
                <Text textAlign='center' fontSize={[14,16]} lineHeight={['25px','30px']}>{description}</Text>
            </Stack>
        </Box>
    )
}


export const PricingCard = ({title, price, onClick, features, duration}: PricingCardProps) => {
    return (
        <Box 
            w='300px' 
            boxShadow='md' 
            bg='white'
            borderRadius='8px'
            py='8'
            px='5'
            h='auto'
        >
            <Text textAlign='center' mb='20px' fontSize={20}>{title}</Text>
            <Heading textAlign='center' fontSize={30} mb='30px'>₦{price}/{duration}</Heading>
            <VStack mb='30px' spacing='25px'>
                {features?.map((feature, index) => (
                    <Text color='rgba(0, 0, 0, .7)' key={index} textAlign='center' borderBottom='1px solid lightgray' pb='3'>{feature}</Text>
                ))}
            </VStack>

            <Button
                color="white"
                width="100%"
                onClick={onClick}
                bg='#2E8DE9'
                py="26px"
                px="16px"
                fontWeight={500}
                _hover={{bg: '#2E8DE9'}}
            >
                Book Now
            </Button>
        </Box>
    )
}