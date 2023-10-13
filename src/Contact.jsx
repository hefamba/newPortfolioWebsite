import React from 'react';
import './Container.css';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';
import { Box, Flex } from '@chakra-ui/layout';
import { Element } from 'react-scroll';
import './Contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}>
      <Element name="contact">
        <Box pt={50} pb={50} className="contactBox">
          <Box className="container" p={1}>
            <h1>Contact me!</h1>
            <Flex justify={'space-evenly'}>
              <ContactLinks />
            </Flex>
          </Box>
        </Box>
      </Element>
    </motion.div>
  );
}
