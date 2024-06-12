import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useToast } from "@chakra-ui/react";


const useFlutterwavePayment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plan, setPlan] = useState("");
  const toast = useToast();
  const publicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;

  const initializePayment = useFlutterwave({
    public_key: publicKey,
    tx_ref: Date.now(),
    amount: plan === "delight" ? 2000 : plan === "max" ? 12000 : 4000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: name,
    },
    customizations: {
      title: `Payment for RS ${plan} Plan`,
      description: `Payment for RS ${plan} subscription plan by ${name}`,
      logo: "https://res.cloudinary.com/ddke4ujej/image/upload/v1718057625/Rejoice_Logistics_Logo-05_1_zuo37s.svg",
    },
  });

  const triggerPayment = () => {
    if (!email || !name || !phoneNumber || !plan) {
      toast({
        title: "Error",
        description: "All fields are required!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    initializePayment({
      callback: (response) => {
        if(response.status === "successful"){
            toast({
                title: "Success",
                description: "Payment was successful!",
                status: "success",
                duration: 4000,
                isClosable: true,
                position: 'top',
            });
            closePaymentModal();
        }else{
            toast({
                title: "Error",
                description: "Payment failed! please try again.",
                status: "error",
                duration: 4000,
                isClosable: true,
                position: 'top',
            });
            closePaymentModal();
        }
      },
      onClose: () => {
        toast({
            title: "Oops!",
            description: "Payment was cancelled!",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: 'top',
        });
        closePaymentModal();
      },
    });
  };

  return {
    setEmail,
    setName,
    setPlan,
    setPhoneNumber,
    triggerPayment,
    email, name, phoneNumber, plan
  };
};

export default useFlutterwavePayment;
