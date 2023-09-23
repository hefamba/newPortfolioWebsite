import { Outlet, NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

import './Nav.css';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Corrected: Remove the event listener in the cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className={`root-layout`}>
      <header
        className={`${isSticky ? 'sticky-nav' : ''}`}
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',

          backgroundColor: ' #002407',
          borderRadius: '50px',
        }}>
        <nav style={{ paddingTop: '50px' }}>
          <h4>Henry.dev</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

              width: '40vw',
            }}>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-between',

                width: '30vw',
                listStyle: 'none',
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
  );
}
