import React from 'react';
import './Container.css';
import ContactLinks from './ContactLinks';
import { Box, Flex } from '@chakra-ui/layout';
import './Contact.css';
import { Element } from 'react-scroll';
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
        <Box pt={50} pb={50} className="contactBox" style={{ width: '100%' }}>
          <Box className="container">
            <h1 style={{ color: 'rgb(36, 126, 72)' }}>Contact me!</h1>
            <Flex justify={'space-evenly'}>
              <ContactLinks />
            </Flex>
          </Box>
        </Box>
      </Element>
    </motion.div>
  );
}
