import {
    Box, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ModalProps } from '../../utilities/scheme'


const index = ({children, isOpen, onClose}:ModalProps) => {
  return (
    <Modal
        isOpen={isOpen} 
        onClose={onClose}
        isCentered
        blockScrollOnMount={true}
    >
        <ModalOverlay />
        <ModalContent py='7' maxW={['350px', '450px']}>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default index