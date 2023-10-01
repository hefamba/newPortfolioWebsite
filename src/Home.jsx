import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import LoadingSpinner from './LoadingSpinner';
import { Box, Flex } from '@chakra-ui/layout';
import './App.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
          <Box className="content-container">
            <Flex direction={'column'} justify={'center'} align={'center'}>
              <Intro />
              <About />
              <Projects />
              <Contact />
            </Flex>
          </Box>

          <footer>
            <h3>Portfolio Website created with React+Vite and Chakra-UI</h3>
          </footer>
        </>
      )}
    </div>
  );
}
