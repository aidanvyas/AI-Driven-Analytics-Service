import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const TermsOfService = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading as="h1" size="xl" textAlign="center" marginTop="1rem">
          Terms of Service
        </Heading>
      </Box>
      <Box>
        <Text fontSize="md" p={5}>
          Welcome to AI-Driven Analytics Service. By accessing or using our services, you agree to be bound by these terms and conditions.
        </Text>
        <Text fontSize="md" p={5}>
          These terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
        </Text>
        <Text fontSize="md" p={5}>
          If you disagree with any part of the terms, then you do not have permission to access the Service.
        </Text>
        <Text fontSize="md" p={5}>
          Please read these Terms of Service carefully before using our website.
        </Text>
      </Box>
    </VStack>
  );
};

export default TermsOfService;
