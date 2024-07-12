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
        }else if(plan === 'luxe'){
            setPlan('luxe');
        }else if(plan === 'deluxe'){
            setPlan('deluxe');
        }else if(plan === 'prime'){
            setPlan('prime');
        }else if(plan === 'supreme'){
            setPlan('supreme')
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
                  <Heading textAlign='center' bgGradient='linear(to-r, rgba(0, 0, 0, 1) 50%, rgba(0,0,0,0.5) 50%)'
                      bgClip='text' fontWeight={900} fontSize={[30,50]}>Find Your Perfect Fit</Heading>
              <Flex gap='24px' alignItems='flex-start' flexWrap='wrap' justifyContent='center'>
                  <PricingCard
                      title='RS Delight'
                      price={4000}
                      duration='day'
                      onClick={() => purchasePlan('delight')}
                      features={["Access to Workspace",'Power supply', 'Access to Headset', 'Unlimited Internet', "Sticky Note", "Complimentaries", "Access to Games"]}
                  />
                  <PricingCard
                      title='RS Adventure'
                      price={7000}
                      duration='Twice in a Week'
                      onClick={() => purchasePlan('adventure')}
                      features={['Access to Workspace', 'Complimentaries', 'Unlimited Internet', "Sticky Notes", "Power Supply", "Access to Games"]}
                  />
                  <PricingCard
                      title='RS Supreme'
                      price={11000}
                      duration='Thrice in a Week'
                      onClick={() => purchasePlan('supreme')}
                      features={['Access to Workspace', 'Unlimited Internet', "Sticky Note", "Power Supply", "Access to Games", "Access to Headset", 'Complimentaries', '5% off printing and photocopy services', ]}
                  />
                  <PricingCard
                      title='RS Max'
                      duration='5 days in a Week'
                      price={18000}
                      onClick={() => purchasePlan('max')}
                      features={['Access to Workspace', 'Complimentaries', 'Unlimited Internet', 'Power Supply', 'Access to headset', 'Sticky Notes', '10% off printing and photocopy services', "Access to games"]}
                  />
                  <PricingCard
                      title='RS Prime'
                      price={28000}
                      duration='Twice weekly in a Month'
                      onClick={() => purchasePlan('prime')}
                      features={['Access to Workspace', 'Unlimited Internet', "Sticky Note", "Power Supply", "Access to Games", 'Complimentaries', '5% off printing and photocopy services', ]}
                  />
                  <PricingCard
                      title='RS Luxe'
                      price={42000}
                      duration='Thrice weekly in a Month'
                      onClick={() => purchasePlan('luxe')}
                      features={['Access to Workspace', 'Unlimited Internet', "Sticky Note", "Power Supply", "Access to Headset", "Access to Games", 'Complimentaries', '10% off printing and photocopy services', ]}
                  />
                  <PricingCard
                      title='RS Deluxe'
                      price={70000}
                      duration='Five times a week in a Month'
                      onClick={() => purchasePlan('deluxe')}
                      features={['Dedicated Workspace', 'Unlimited Internet', "Sticky Note", "Power Supply", "Access to Headset", "Access to Games", 'Complimentaries', '15% off printing and photocopy services', ]}
                  />
              </Flex>
          </Stack>
      </Box>
    </>
  )
}

export default index