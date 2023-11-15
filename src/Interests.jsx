import React from 'react';
import './Container.css';
import './Intro.css';
import { Image, Box, Flex, Spacer } from '@chakra-ui/react';
import TechStackIcons from './TechStackIcons';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Interests() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}>
      <Element name="/">
        <Box pt={40}>
          <Box className="container" id="intro">
            <h1 style={{ color: 'rgb(36, 126, 72)' }}>Interest/Hobbies</h1>
            <Flex wrap={'wrap'}></Flex>
          </Box>
        </Box>
      </Element>
    </motion.div>
  );
}
