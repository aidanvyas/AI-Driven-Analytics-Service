import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Flex, Spacer, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Settings from './Settings';
import SignUp from './SignUp';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="teal.500" color="white">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              SaaS Platform
            </Heading>
          </Flex>

          <Spacer />

          <Box>
            <Link to="/">Home</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/settings">Settings</Link>
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
                </Routes>
              </Box>
            </VStack>
          </Grid>
        </Box>
        <Box as="footer" p={5} bg="teal.500" color="white">
          <h3>© 2024 SaaS Platform, Inc.</h3>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
