import React from 'react';
import Cards from './Cards';
import { Element } from 'react-scroll';
import { Box } from '@chakra-ui/layout';
import './Container.css';

export default function Projects() {
  return (
    <Box pl={25} width={'95vw'}>
      <Element name="projects">
        <Cards />
      </Element>
    </Box>
  );
}
