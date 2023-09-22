import React from 'react';
import './Container.css';
import { Image, Box, Flex, Spacer } from '@chakra-ui/react';
import TechStackIcons from './TechStackIcons';

export default function Intro() {
  return (
    <Box className="container">
      <Flex>
        <Box pr={20}>
          <h1>Henry Efamba Jr</h1>
          <h3>Software Engineer</h3>
          <p>
            I'm a self-taught software engineer who is passionate about sotfware
            development and cutting-edge technologies. With a relentless drive
            for learning and a creative mindset, I've honed my skills to craft
            captivating user experiences on the web. Here you'll discover a
            collection of projects that showcase my journey as a software
            developer. From responsive web designs to interactive user
            interfaces. 👨🏿‍💻
          </p>
          <h3>Tech Stack:</h3>
          <Flex justify={'center'}>
            <TechStackIcons />
          </Flex>
        </Box>
        <Spacer />
        <Image
          borderRadius="200px"
          boxSize="400px"
          src="henry-headshot.jpg"
          alt="Henry Efamba"
        />
      </Flex>
    </Box>
  );
}
