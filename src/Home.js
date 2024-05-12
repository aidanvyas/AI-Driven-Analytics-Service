import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';

const Home = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => setGreeting(data.body))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  const textColor = useColorModeValue('gray.800', 'white');
  const buttonColorScheme = 'blue';

  return (
    <Box
      textAlign="center"
      py={10}
      px={5}
      bgGradient="linear(to-r, teal.300, blue.500)"
      color={textColor}
      minHeight="100vh"
    >
      <Heading fontSize="4xl" fontWeight="extrabold" mb={4}>
        Welcome to AI-Driven Analytics Service
      </Heading>
      <Text fontSize="xl" mt={4}>
        {greeting || 'Our platform leverages advanced AI algorithms to provide you with actionable insights from your data. Explore our analytics tools, automate your reporting, and make data-driven decisions with ease.'}
      </Text>
      <Button
        mt={10}
        colorScheme={buttonColorScheme}
        size="lg"
        shadow="md"
        _hover={{ shadow: "xl" }}
        onClick={() => alert('Navigate to Sign Up or Learn More')}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
