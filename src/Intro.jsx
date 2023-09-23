import React from 'react';
import './Container.css';
import { Image, Box, Flex, Spacer } from '@chakra-ui/react';
import TechStackIcons from './TechStackIcons';

export default function Intro() {
  return (
    <Box className="container" id="intro">
      <Flex>
        <Box pr={20}>
          <h1 style={{ color: 'rgb(36, 126, 72)' }}>Henry Efamba Jr</h1>
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
          <h3 style={{ position: 'relative', bottom: '1.5rem' }}>
            Software Engineer, Excited about technology, Creative Content
            Creator
          </h3>
          <h2>Tech Stack:</h2>
          <Flex justify={'center'}>
            <TechStackIcons />
          </Flex>
        </Box>
        <Spacer />
        <Image
          borderRadius="200px"
          boxSize="350px"
          src="henry-headshot.jpg"
          alt="Henry Efamba"
          boxShadow={'10px 15px 40px black'}
        />
      </Flex>
    </Box>
  );
}
