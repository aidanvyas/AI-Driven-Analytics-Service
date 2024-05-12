import React from 'react';
import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Projects</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {/* Placeholder for project cards */}
        {/* This will be replaced with dynamic content fetched from the backend */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Heading size="md" my="2">Project 1</Heading>
          <Text mb="4">This is a brief description of Project 1.</Text>
          <Button colorScheme="teal">View Project</Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Heading size="md" my="2">Project 2</Heading>
          <Text mb="4">This is a brief description of Project 2.</Text>
          <Button colorScheme="teal">View Project</Button>
        </Box>
        {/* More project cards can be added here */}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
