import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign="center" py={10}>
      <Heading>Welcome to AI-Driven Analytics Service</Heading>
      <Text mt={4}>
        Our platform leverages advanced AI algorithms to provide you with
        actionable insights from your data. Explore our analytics tools, automate
        your reporting, and make data-driven decisions with ease.
      </Text>
      <Button
        mt={10}
        colorScheme="teal"
        onClick={() => alert('Navigate to Sign Up or Learn More')}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
