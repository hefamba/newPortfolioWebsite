import { Outlet, NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './App.css';
import './Nav.css';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box width={'100%'} style={{ padding: '30px 0' }}>
      <nav
        style={{
          backgroundColor: ' #002407',
          width: '100%',
          padding: '10px',
          display: 'flex',
        }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            cursor: 'pointer',
            width: '50%',
          }}>
          <li>
            <ScrollLink
              className="navLink"
              spy={true}
              smooth={true}
              duration={500}
              to="/">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="navLink"
              spy={true}
              smooth={true}
              duration={500}
              to="about">
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="navLink"
              spy={true}
              smooth={true}
              duration={500}
              to="projects">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="navLink"
              spy={true}
              smooth={true}
              duration={500}
              to="interest">
              Interest
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="navLink"
              spy={true}
              smooth={true}
              duration={500}
              to="contact">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <main className="fade-in">
        <Outlet />
      </main>
    </Box>
  );
}
