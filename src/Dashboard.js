import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Stat>
          <StatLabel>Total Projects</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>As of September 2024</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Active Users</StatLabel>
          <StatNumber>5,000</StatNumber>
          <StatHelpText>Users currently active</StatHelpText>
        </Stat>
        {/* More stats can be added here */}
      </SimpleGrid>
      {/* Additional dashboard widgets will be added here */}
    </Box>
  );
};

export default Dashboard;
