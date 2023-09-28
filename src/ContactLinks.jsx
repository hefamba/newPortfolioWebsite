import {
  Box,
  Flex,
  Icon,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import './link.css';

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
import { FaExternalLinkAlt, FaMailchimp, FaPhoneAlt } from 'react-icons/fa';
// Import the Lorem component

export default function ContactLinks() {
  return (
    <Box
      style={{
        width: '50%',
      }}>
      <h2>Contact Links</h2>
      <Box>
        <Flex justify={'space-evenly'} flexWrap={'wrap'}>
          <Link
            href="https://www.linkedin.com/in/henry-efamba-jr-b298138a/"
            color={'green'}
            className="contactLink"
            isExternal>
            <Text style={{ fontSize: '18px' }}>
              LinkedIn {<Icon as={FaExternalLinkAlt} />}
            </Text>
          </Link>
          <Link
            href="https://github.com/hefamba#from-nutritionist-to-software-engineer-my-journey"
            isExternal
            color={'green'}
            className="contactLink">
            <Text
              style={{
                fontSize: '18px',
                paddingRight: '30px',
                paddingLeft: '30px',
              }}>
              Github {<Icon as={FaExternalLinkAlt} />}
            </Text>
          </Link>
          <Link
            isExternal
            color={'green'}
            href="mailto:efambajr.henry@gmail.com"
            className="contactLink">
            <Text style={{ fontSize: '18px', paddingRight: '20px' }}>
              efambajr.henry@gmail.com {<Icon as={FaMailchimp} />}
            </Text>
          </Link>
          <Link href="tel:+18322648788" color={'green'} className="contactLink">
            <Text style={{ fontSize: '18px' }}>
              +1(832) 264-8788 {<Icon as={FaPhoneAlt} />}
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
