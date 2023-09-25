import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import LoadingSpinner from './LoadingSpinner';
import { Box, Flex } from '@chakra-ui/layout';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by adding a delay
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when loading is complete
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Box>
            <Flex direction={'column'} justify={'center'} align={'center'}>
              <Intro />
              <About />
              <Projects />
              <Contact />
            </Flex>
          </Box>
        </>
      )}
    </div>
  );
}
