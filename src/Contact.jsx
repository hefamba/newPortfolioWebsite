import React from 'react';
import './Container.css';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';
import { Box, Flex } from '@chakra-ui/layout';
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element name="contact">
      <Box pt={50} pb={50}>
        <Box className="container" p={1}>
          <h1>Contact me!</h1>
          <Flex justify={'space-evenly'}>
            <ContactLinks />
            {/* <ContactForm /> */}
          </Flex>
        </Box>
      </Box>
    </Element>
  );
}
