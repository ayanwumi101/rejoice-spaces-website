import { Box, Heading, Text, Stack, Flex, FormLabel, Input, FormControl, Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { PricingCard } from '../Cards'
import Modal from '../Modal'
import useFlutterwavePayment from '../../utilities/flutterwaveConfig'



const index = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const toast = useToast();
  const { setEmail, setName, setPhoneNumber, triggerPayment, setPlan, email, phoneNumber, name, plan } = useFlutterwavePayment();

  const purchasePlan = (plan: string) => {
        setOpenModal(true);
        if (plan === 'delight') {
            setPlan('delight')
        } else if (plan === 'max') {
            setPlan('max')
        } else if (plan === 'adventure') {
            setPlan('adventure');
        }
  }

  const handlePayment = () => {
    if(email && phoneNumber && name && plan){
        triggerPayment();
        setOpenModal(false);
    }else{
        toast({
            title: "Error",
            description: "Please fill all fields",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: 'top'
        })
    }
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Stack spacing='30px'>
            <Heading fontSize={22} lineHeight='33px' textAlign='center'textTransform='capitalize'>Rejoice Spaces {plan} plan Subscription</Heading>
            <FormControl>
                <Stack spacing='20px'>
                    <Box>
                        <FormLabel fontSize={14}>Full Name</FormLabel>
                        <Input _placeholder={{fontSize: 14}} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter your full name' />
                    </Box>
                    <Box>
                        <FormLabel fontSize={14}>Email</FormLabel>
                        <Input _placeholder={{ fontSize: 14 }} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' />
                    </Box>
                    <Box>
                        <FormLabel fontSize={14}>Phone Number</FormLabel>
                        <Input maxLength={11} _placeholder={{ fontSize: 14 }} type='tel' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter your phone number' />
                    </Box>
                </Stack>
            </FormControl>
            <Button bg='#2E8DE9' color='white' py='25px' fontWeight={500} onClick={handlePayment}>Proceed to Payment</Button>
        </Stack>
      </Modal>
      <Box py='80px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          bg='#F6F6F6'
          id='pricing'
      >
          <Stack spacing='60px'>
              <Heading textAlign='center' fontWeight={900} fontSize={[30,50]}>Find Your Perfect Fit</Heading>
              <Flex gap='24px' alignItems='flex-start' flexWrap='wrap' justifyContent='center'>
                  <PricingCard
                      title='RS Delight'
                      price={2000}
                      duration='day'
                      onClick={() => purchasePlan('delight')}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet']}
                  />
                  <PricingCard
                      title='RS Max'
                      duration='6 days'
                      price={12000}
                      onClick={() => purchasePlan('max')}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet', 'Complimentary Snack', 'Free to use headset', 'Sticky Note', '15% off printing and photocopy services']}
                  />
                  <PricingCard
                      title='RS Adventure'
                      price={4000}
                      duration='day'
                      onClick={() => purchasePlan('adventure')}
                      features={['Work Area', 'Complimentary coffee/water', 'Unlimited Internet', 'Complimentary Snack', 'Free to use headset']}
                  />
              </Flex>
          </Stack>
      </Box>
    </>
  )
}

export default index