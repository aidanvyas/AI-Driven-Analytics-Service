import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading as="h1" size="xl" textAlign="center" marginTop="1rem">
          Privacy Policy
        </Heading>
      </Box>
      <Box>
        <Text fontSize="md" p={5}>
          At AI-Driven Analytics Service, Inc., we respect your privacy and are committed to protecting it through our compliance with this policy.
        </Text>
        <Text fontSize="md" p={5}>
          This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </Text>
        <Text fontSize="md" p={5}>
          Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. By accessing or using this website, you agree to this privacy policy.
        </Text>
        <Text fontSize="md" p={5}>
          This policy may change from time to time. Your continued use of this website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
        </Text>
      </Box>
    </VStack>
  );
};

export default PrivacyPolicy;
