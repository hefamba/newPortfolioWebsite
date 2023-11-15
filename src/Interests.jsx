import React from 'react';
import './Container.css';
import './Frame.css';

import { Box, Flex } from '@chakra-ui/react';
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
      <h1 style={{ color: 'whitesmoke' }}>Interest</h1>

      <Box pt={10}>
        <Box className="container" id="intro">
          <h1>PC Building</h1>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Flex wrap={'wrap'}>
              <Box style={{ width: '100%' }}>
                <p>
                  In 2020, my fascination with gaming PCs became a
                  transformative journey that led me into the heart of the tech
                  industry. As I delved into the intricacies of building a
                  high-performance system, powered by an AMD Ryzen 5 3600X
                  6-core processor and a TUF Gaming X570 motherboard, I
                  discovered the dynamic intersection of hardware and software.
                  The NVIDIA GeForce RTX 2070 Super, coupled with 32 gigs of
                  RAM, unleashed a world of immersive gaming experiences.
                  Managing a colossal 4TB storage capacity allowed me to
                  appreciate the significance of robust computing power. Eager
                  to share my passion, I documented the entire assembly process
                  on YouTube, showcasing the meticulous artistry of crafting a
                  gaming rig. This hands-on experience ignited my curiosity and
                  determination, propelling me towards a career in technology
                  where innovation and performance converge.
                </p>
              </Box>
              <Box style={{ width: '100%' }}>
                <iframe
                  className="frameClass"
                  style={{
                    border: 'solid black 1px',
                    boxShadow: '10px 15px 40px black',
                  }}
                  width="50%"
                  height="315"
                  src="https://www.youtube.com/embed/MK7TL2mfsW8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/* <Box pt={10}>
        <Box className="container" id="intro">
          <h1>CONTENT CREATOR AND GAMING</h1>

          <Flex wrap={'wrap'}></Flex>
        </Box>
      </Box>
      <Box pt={10}>
        <Box className="container" id="intro">
          <h1>BASKETBALL ENTHUSIEST</h1>

          <Flex wrap={'wrap'}></Flex>
        </Box>
      </Box> */}
    </motion.div>
  );
}
