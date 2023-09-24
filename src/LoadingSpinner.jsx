import React from 'react';
import { Spinner } from '@chakra-ui/react';

export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Spinner thickness="20px" color="green.500" />
    </div>
  );
}
