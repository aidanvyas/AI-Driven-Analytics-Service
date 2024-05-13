import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Flex, Spacer, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Settings from './Settings';
import SignUp from './SignUp';
import PrivacyPolicy from './PrivacyPolicy'; // Import the PrivacyPolicy component
import TermsOfService from './TermsOfService'; // Import the TermsOfService component
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="blue.800" color="white" borderBottom="1px" borderColor="blue.900">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              AI-Driven Analytics Service
            </Heading>
          </Flex>

          <Spacer />

          <Box>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
            <Link to="/projects" style={{ marginRight: '10px' }}>Projects</Link>
            <Link to="/settings" style={{ marginRight: '10px' }}>Settings</Link>
          </Box>

          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>

        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Box>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add route for Privacy Policy */}
                  <Route path="/terms" element={<TermsOfService />} /> {/* Add route for Terms of Service */}
                </Routes>
              </Box>
            </VStack>
          </Grid>
        </Box>
        <Box as="footer" p={5} bg="blue.800" color="white">
          <Flex justifyContent="space-between">
            <Box>
              <h3>© 2024 AI-Driven Analytics Service, Inc.</h3>
            </Box>
            <Box>
              <Link to="/privacy" style={{ marginRight: '10px', color: 'white' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ marginRight: '10px', color: 'white' }}>Terms of Service</Link>
            </Box>
          </Flex>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
