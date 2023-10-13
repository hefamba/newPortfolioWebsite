import React from 'react';
import './Container.css';
import './Intro.css';
import { Image, Box, Flex, Spacer } from '@chakra-ui/react';
import TechStackIcons from './TechStackIcons';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Intro() {
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
            <Flex wrap={'wrap'}>
              <Box pr={10} className="content">
                <h1 style={{ color: 'rgb(36, 126, 72)' }} className="title">
                  Henry Efamba Jr
                </h1>
                <h3
                  style={{
                    position: 'relative',
                    bottom: '25px',
                  }}>
                  <a href="https://git.io/typing-svg">
                    <img
                      src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=25&pause=1000&color=000000&center=true&vCenter=true&width=435&lines=Software+Engineer;React+Web+Developer"
                      alt="Typing SVG"
                    />
                  </a>
                </h3>
                <h3
                  className="mini-bio"
                  style={{ position: 'relative', bottom: '1.5rem' }}>
                  Software Engineer, Excited about technology, Creative Content
                  Creator
                </h3>
                <h2 className="techStack">Tech Stack:</h2>
                <Flex justify={'center'}>
                  <TechStackIcons />
                </Flex>
              </Box>
              <Spacer />
              <Image
                borderRadius="200px"
                boxSize="30%"
                src="henry-headshot.jpg"
                alt="Henry Efamba"
                boxShadow={'10px 15px 40px black'}
              />
            </Flex>
          </Box>
        </Box>
      </Element>
    </motion.div>
  );
}
