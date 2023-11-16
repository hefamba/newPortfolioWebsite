import React from 'react';
import './Container.css';
import './Frame.css';
import TikTokEmbed from './TikTokEmbed';
import TikTokEmbed4 from './TikTokEmbed4';

import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TikTokEmbed2 from './TikTokEmbed2';
import TikTokEmbed3 from './TikTokEmbed3';

const tiktoks = [
  {
    code: <TikTokEmbed2 />,
  },
  {
    code: <TikTokEmbed3 />,
  },
  {
    code: <TikTokEmbed />,
  },
];

export default function Interests() {
  return (
    <motion.div>
      <h1 style={{ color: 'whitesmoke' }}>Interest</h1>

      <Box pt={10}>
        <Box className="container" id="intro">
          <h1 style={{ color: 'rgb(36, 126, 72)' }}>PC Building</h1>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Flex wrap={'wrap'}>
              <Box style={{ width: '100%' }}>
                <p>
                  In 2020, my fascination with gaming PCs became a
                  transformative journey that led me into the heart of the tech
                  industry. As I delved into the intricacies of building a
                  high-performance system, powered by an AMD Ryzen 5 3600X
                  6-core processor and a TUF Gaming X570 motherboard, I
                  discovered the dynamic intersection of hardware and software.
                  The NVIDIA GeForce RTX 2070 Super, coupled with 32 gigs of
                  RAM, unleashed a world of immersive gaming experiences.
                  Managing a colossal 4TB storage capacity allowed me to
                  appreciate the significance of robust computing power. Eager
                  to share my passion, I documented the entire assembly process
                  on YouTube, showcasing the meticulous artistry of crafting a
                  gaming rig. This hands-on experience ignited my curiosity and
                  determination, propelling me towards a career in technology
                  where innovation and performance converge.
                </p>
              </Box>
              <Box style={{ width: '100%' }}>
                <iframe
                  className="frameClass"
                  style={{
                    boxShadow: '10px 15px 40px black',
                  }}
                  width="50%"
                  height="315"
                  src="https://www.youtube.com/embed/MK7TL2mfsW8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box pt={40}>
        <Box className="container" id="intro">
          <h1 style={{ color: 'rgb(36, 126, 72)' }}>
            Content Creating and Gaming
          </h1>

          <Flex wrap={'wrap'} justify={'center'}>
            <p>
              My love for content creation burgeoned in 2013 when I first delved
              into the world of short-form videos, crafting vines that sparked
              my creative journey. Throughout my college years, the joy of
              producing content intensified as I collaborated with a group of
              friends on various video projects. This passion seamlessly
              transitioned into the digital landscape of TikTok, Instagram,
              YouTube, and Twitch. In 2020, amid the challenges the year
              presented, I embraced the world of streaming on platforms like
              Twitch and TikTok. This digital exploration bore fruit as I found
              myself going viral multiple times on TikTok, amassing an engaged
              audience of 47K+ followers. This viral success serves as a
              testament to the resonance of my content and the vibrant community
              that has grown around my creative endeavors. Armed with a
              controller, I ventured into the realms of popular games such as
              Halo, Call of Duty, Smash Brothers, and Apex Legends, transforming
              my love for gaming into engaging and entertaining content. The
              evolution of my content creation journey, from vines to the
              dynamic platforms of today, showcases the enduring enthusiasm that
              fuels my creative endeavors.
            </p>
            <Flex wrap={'wrap'}>
              {tiktoks.map((tiktok) => (
                <div style={{ padding: '10px' }}>{tiktok.code}</div>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* <Box pt={10}>
        <Box className="container" id="intro">
          <h1>BASKETBALL ENTHUSIEST</h1>

          <Flex wrap={'wrap'}></Flex>
        </Box>
      </Box> */}
    </motion.div>
  );
}