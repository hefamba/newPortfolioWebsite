import { Outlet, NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

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
    <Box width={'100%'}>
      <div
        className={`root-layout`}
        style={{
          width: '100%',
        }}>
        <header
          className={`${isSticky ? 'sticky-nav' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: ' #002407',
          }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '90%',
              position: 'relative',
              top: '-2px',
            }}>
            <h4 className="henry-dev">Henry.dev</h4>
            <div style={{ width: '100%' }}>
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',

                  width: '30vw',
                  listStyle: 'none',
                  cursor: 'pointer',
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
                    to="contact">
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </Box>
  );
}
