import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import LoadingSpinner from './LoadingSpinner';
import { Box, Flex } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { FaCode } from 'react-icons/fa';
import './App.css';
import Interests from './Interests';

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
          <Container maxW="1300px">
            <Flex direction={'column'} justify={'center'} align={'center'}>
              <Intro />
              <Projects />
              <About />
              <Interests />
              <Contact />
            </Flex>
          </Container>

          <footer>
            <h3>Portfolio Website created with React+Vite and Chakra-UI </h3>
            <Link href="https://github.com/hefamba/newPortfolioWebsite">
              {' '}
              <p className="footerLink" style={{ cursor: 'pointer' }}>
                <FaCode />
                Code Link
              </p>
            </Link>
          </footer>
        </>
      )}
    </div>
  );
}
