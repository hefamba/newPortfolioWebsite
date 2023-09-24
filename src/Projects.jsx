import React from 'react';
import Cards from './Cards';
import { Element } from 'react-scroll';
import { Box } from '@chakra-ui/layout';

export default function Projects() {
  return (
    <Box pl={25}>
      <Element name="projects">
        <Cards />
      </Element>
    </Box>
  );
}
