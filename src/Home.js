import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import swal from 'sweetalert';
import { motion } from 'framer-motion';

const Home = () => {
  const [greeting, setGreeting] = useState('');
  const [fetchError, setFetchError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setGreeting(data.body))
      .catch(error => {
        console.error('Error fetching greeting:', error);
        setFetchError(true);
      });
  }, []);

  const textColor = useColorModeValue('gray.800', 'white');
  const buttonColorScheme = 'blue';

  const celebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleGetStartedClick = () => {
    celebrate();
    swal({
      title: "Ready to dive in?",
      text: "Click OK to proceed to sign up and explore our analytics tools!",
      icon: "success",
      button: "OK",
    }).then(() => {
      navigate('/signup');
    });
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

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
        {fetchError
          ? 'There was an error fetching the greeting, but our platform still leverages advanced AI algorithms to provide you with actionable insights from your data.'
          : greeting || 'Our platform leverages advanced AI algorithms to provide you with actionable insights from your data. Explore our analytics tools, automate your reporting, and make data-driven decisions with ease.'}
      </Text>
      <motion.Button
        mt={10}
        colorScheme={buttonColorScheme}
        size="lg"
        shadow="md"
        _hover={{ shadow: "xl" }}
        onClick={handleGetStartedClick}
        variants={buttonVariants}
        whileHover="hover"
      >
        Get Started
      </motion.Button>
    </Box>
  );
};

export default Home;
