import { Outlet, NavLink } from 'react-router-dom';
import './Nav.css';
import { Flex } from '@chakra-ui/layout';
import { space } from '@chakra-ui/styled-system';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '20px',
        }}>
        <nav>
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
                <NavLink className="navLink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink className="navLink" to="#about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="#projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="#contacts">
                  Contact
                </NavLink>
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
