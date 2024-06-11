import { Box, Heading, Text, Stack, Flex, FormLabel, Input, FormControl, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { PricingCard } from '../Cards'
import Modal from '../Modal'


const index = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

  const purchasePlan = (plan: string) => {
        setOpenModal(true);
        if (plan === 'delight') {
            console.log('Delight');
        } else if (plan === 'max') {
            console.log('Max');
        } else if (plan === 'adventure') {
            console.log('Adventure');
        }
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Stack spacing='30px'>
            <Heading fontSize={24} textAlign='center'>Rejoice Spaces Subscription</Heading>
            <FormControl>
                <Stack spacing='20px'>
                    <Box>
                        <FormLabel>Full Name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter your full name' />
                    </Box>
                    <Box>
                        <FormLabel>Email</FormLabel>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' />
                    </Box>
                    <Box>
                        <FormLabel>Phone Number</FormLabel>
                        <Input value={phone} type='tel' placeholder='Enter your phone number' />
                    </Box>
                </Stack>
            </FormControl>
            <Button>Submit</Button>i
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
                      price={3000}
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