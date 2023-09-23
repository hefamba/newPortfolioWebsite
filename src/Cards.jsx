import React from 'react';
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
  Icon,
} from '@chakra-ui/react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

export default function Cards() {
  const cardData = [
    {
      title: 'MovieApp',
      image: 'movieApp.jpg',
      text: 'The Movie Search App is a web application that allows users to search for movies and view information about them. Users can search for movies by title, and the app will display a list of matching movies, including details such as the movie title, poster, overview, and rating.',
      codeLink: 'https://github.com/hefamba/movieAppJs/edit/main/README.md',
      demoLink: 'https://hefamba.github.io/movieAppJs/',
      techStack: 'HTML, CSS, JavaScript',
    },
    {
      title: 'MovieApp',
      image: 'movieApp.jpg',
      text: 'The Movie Search App is a web application that allows users to search for movies and view information about them. Users can search for movies by title, and the app will display a list of matching movies, including details such as the movie title, poster, overview, and rating.',
      codeLink: 'https://github.com/hefamba/movieAppJs/edit/main/README.md',
      demoLink: 'https://hefamba.github.io/movieAppJs/',
      techStack: 'HTML, CSS, JavaScript',
    },
    {
      title: 'MovieApp',
      image: 'movieApp.jpg',
      text: 'The Movie Search App is a web application that allows users to search for movies and view information about them. Users can search for movies by title, and the app will display a list of matching movies, including details such as the movie title, poster, overview, and rating.',
      codeLink: 'https://github.com/hefamba/movieAppJs/edit/main/README.md',
      demoLink: 'https://hefamba.github.io/movieAppJs/',
      techStack: 'HTML, CSS, JavaScript',
    },
    {
      title: 'MovieApp',
      image: 'movieApp.jpg',
      text: 'The Movie Search App is a web application that allows users to search for movies and view information about them. Users can search for movies by title, and the app will display a list of matching movies, including details such as the movie title, poster, overview, and rating.',
      codeLink: 'https://github.com/hefamba/movieAppJs/edit/main/README.md',
      demoLink: 'https://hefamba.github.io/movieAppJs/',
      techStack: 'HTML, CSS, JavaScript',
    },
  ];

  return (
    <Box pt={50}>
      <h1>Projects</h1>
      <SimpleGrid
        style={{ display: 'flex', justifyContent: 'space-between' }}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {cardData.map((card, index) => (
          <Box>
            <Card
              key={index}
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
                <Button
                  pl={10}
                  style={{ backgroundColor: 'rgb(36, 126, 72)' }}
                  leftIcon={<FaCode />}>
                  Code
                </Button>
                <Button
                  style={{ backgroundColor: 'rgb(36, 126, 72)' }}
                  leftIcon={<FaExternalLinkAlt />}>
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
