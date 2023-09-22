import React from 'react';
import './Container.css';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';

export default function About() {
  return (
    <Box pt={50}>
      <Box className="container">
        <Flex justify={'space-evenly'}>
          <Box
            position="relative"
            top="-20px"
            left="20" // Adjust the overlap as needed
          >
            <Box>
              <Image
                border={'1px black solid'}
                borderRadius={20}
                boxSize="225px"
                height="100%"
                src="image2.jpg"
                alt="Henry Efamba"
              />
            </Box>
          </Box>
          <Box
            position="relative"
            bottom="-40px"
            right="30" // Adjust the overlap as needed
          >
            <Box>
              <Image
                border={'1px black solid'}
                borderRadius={20}
                boxSize="225px"
                height="100%"
                src="image1.jpg"
                alt="Second Image"
              />
            </Box>
          </Box>
          <Box padding={20} style={{ width: '40vw' }}>
            <h1 style={{ color: 'rgb(36, 126, 72)' }}>About me</h1>
            <p>
              I'm a self-taught software engineer who is passionate about
              software development and cutting-edge technologies. With a
              relentless drive for learning and a creative mindset, I've honed
              my skills to craft captivating user experiences on the web. Here
              you'll discover a collection of projects that showcase my journey
              as a software developer. From responsive web designs to
              interactive user interfaces. 👨🏿‍💻
            </p>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}