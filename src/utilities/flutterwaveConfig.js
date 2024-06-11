import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const useFlutterwavePayment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const initializePayment = useFlutterwave({
    public_key: "FLWPUBK-**************************-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: name,
    },
    customizations: {
      title: title,
      description: description,
      logo: "https://res.cloudinary.com/ddke4ujej/image/upload/v1718057625/Rejoice_Logistics_Logo-05_1_zuo37s.svg",
    },
  });

  const triggerPayment = () => {
    // Ensure all required fields are filled
    if (!email || !name || !phoneNumber || !title || !description) {
      alert("Please fill all the fields");
      return;
    }
    // Call the initializePayment function
    initializePayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  return {
    setEmail,
    setName,
    setPhoneNumber,
    setTitle,
    setDescription,
    triggerPayment,
  };
};

export default useFlutterwavePayment;
