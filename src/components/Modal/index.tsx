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
    >
        <ModalOverlay />
        <ModalContent py='7'>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default index