import React from 'react';
import { Icon } from '@chakra-ui/icon';
import { FaCss3, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import {
  SiBootstrap,
  SiChakraui,
  SiGithub,
  SiMui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export default function TechStackIcons() {
  const icons = [
    { title: FaHtml5 },
    { title: FaCss3 },
    { title: FaJsSquare },
    { title: FaReact },
    { title: SiTypescript },
    { title: SiGithub },
    { title: SiBootstrap },
    { title: SiChakraui },
    { title: SiMui },
    { title: SiTailwindcss },
  ];
  return (
    <div>
      {icons.map((icon) => {
        return <Icon className="techStack" as={icon.title} boxSize={30} />;
      })}
    </div>
  );
}
