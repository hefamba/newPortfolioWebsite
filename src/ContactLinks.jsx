import {
  Box,
  Flex,
  Link,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
// Import the Lorem component

function ScrollingExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('outside');

  const btnRef = React.useRef(null);

  return (
    <div>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Box direction="row">
          <Radio value="outside">outside</Radio>
        </Box>
      </RadioGroup>

      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Trigger modal
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis a
            suscipit accusamus autem rem iusto!
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default function ContactLinks() {
  return (
    <Box style={{ width: '50vw' }}>
      <h2>Contact Links</h2>
      <Box>
        <Flex justify={'space-evenly'}>
          <Link
            href="https://www.linkedin.com/in/henry-efamba-jr-b298138a/"
            isExternal>
            LINKEDIN
          </Link>
          <Link
            href="https://github.com/hefamba#from-nutritionist-to-software-engineer-my-journey"
            isExternal>
            GITHUB
          </Link>
          <Link
            href="https://github.com/hefamba#from-nutritionist-to-software-engineer-my-journey"
            isExternal>
            📧 efambajr.henry@gmail.com
          </Link>
        </Flex>
      </Box>
      <Box>
        <h2>Resume:</h2>
        {/* Render the ScrollingExample component here */}
        <ScrollingExample />
      </Box>
    </Box>
  );
}
