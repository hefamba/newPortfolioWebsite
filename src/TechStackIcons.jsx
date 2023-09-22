import React from 'react';
import { Icon } from '@chakra-ui/icon';
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function TechStackIcons() {
  const icons = [
    { title: FaHtml5 },
    { title: FaCss3 },
    { title: FaJsSquare },
    { title: FaReact },
    { title: SiTypescript },
    { title: FaGithub },
  ];
  return (
    <div>
      {icons.map((icon) => {
        return <Icon as={icon.title} boxSize={40} />;
      })}
    </div>
  );
}