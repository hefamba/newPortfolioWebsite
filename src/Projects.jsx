import React from 'react';
import Cards from './Cards';
import { Element } from 'react-scroll';

export default function Projects() {
  return (
    <div>
      <Element name="projects">
        <Cards />
      </Element>
    </div>
  );
}
