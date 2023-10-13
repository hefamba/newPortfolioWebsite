import React from 'react';
import { v4 as uuid } from 'uuid';
import './Container.css';
import './Cards.css';
import {
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

import './ButtonCards.css';

export default function Cards() {
  const cardData = [
    {
      id: uuid(),
      title: 'Evolve Fitness',
      image: 'newEvolveFitness.jpg',
      text: "A responsive React web application built using Vite, Tailwind CSS, and other packages to promote a women's gym. This website showcases the various classes offered by the gym and provides contact information for potential customers.",
      codeLink: 'https://github.com/hefamba/evolveGymProject',
      demoLink: 'https://evolvewomensgym.netlify.app/',
      techStack: 'Typescript, React, Tailwind',
    },
    {
      id: uuid(),
      title: 'DreamLoud Gaming',
      image: 'newDreamLoud-1.jpg',
      text: "Created a website based on a fictional gaming organization DreamLoud. I'm a big fan of competitive esports which gave me the inspiration. This serves as website for the org that gives information about DreamLoud and it's members. Also has a shop with for fans of DreamLoud to buy Merchandise. Created with HTML5 and Bootstrap. VSCode as my text editor and all code was pushed to Github.",
      codeLink: 'https://github.com/hefamba/DreamLoud_Gaming',
      demoLink: 'https://hefamba.github.io/DreamLoud_Gaming/',
      techStack: 'HTML, CSS, JavaScript, Bootstrap',
    },
    {
      id: uuid(),
      title: 'MovieApp',
      image: 'newMovieApp.jpg',
      text: 'The Movie Search App is a web application that allows users to search for movies and view information about them. Users can search for movies by title, and the app will display a list of matching movies, including details such as the movie title, poster, overview, and rating.',
      codeLink: 'https://github.com/hefamba/movieAppJs',
      demoLink: 'https://hefamba.github.io/movieAppJs/',
      techStack: 'HTML, CSS, JavaScript',
    },
    {
      id: uuid(),
      title: 'Virtural Resume Obinna',
      image: 'newObinnaResume.jpg',
      text: 'Created a Resume website for one of my close friends to help him stick out in job applications. A simple project that gave me the opportunity to experiment building using React.js, and google css framework Material UI.',
      codeLink: 'https://github.com/hefamba/obinna_resume-netlify',
      demoLink: 'https://resume-obinna-i.netlify.app/',
      techStack: 'JavaScript, React, Material UI',
    },
  ];

  return (
    <Box pt={50} style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Projects</h1>
      <SimpleGrid
        className="grid"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {cardData.map((card) => (
          <Box style={{ display: 'flex' }}>
            <Card
              key={card.id}
              className="cardAnimation"
              width={'80%'}
              style={{
                backgroundColor: 'whitesmoke',
                color: 'black',
                padding: '20px',
                border: 'none',
                borderRadius: '10px',
              }}>
              <CardHeader>
                <h2>{card.title}</h2>
              </CardHeader>
              <CardBody>
                <img
                  src={card.image}
                  alt="movieApp"
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    border: '2px black solid',
                  }}
                />
                <Text>{card.techStack}</Text>
                <Text>{card.text}</Text>
              </CardBody>
              <CardFooter
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <Link href={card.codeLink}>
                  <p className="ptag">
                    <FaCode />
                    Code
                  </p>
                </Link>
                <Link href={card.demoLink}>
                  <p className="ptag">
                    <FaExternalLinkAlt />
                    Live Demo
                  </p>
                </Link>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
