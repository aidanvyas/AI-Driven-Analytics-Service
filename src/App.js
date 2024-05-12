import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Settings from './Settings';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Box p={5} shadow="md" borderWidth="1px">
                <h1>Welcome to Our SaaS Platform</h1>
                <nav>
                  <Link to="/">Home</Link> |{" "}
                  <Link to="/dashboard">Dashboard</Link> |{" "}
                  <Link to="/projects">Projects</Link> |{" "}
                  <Link to="/settings">Settings</Link>
                </nav>
              </Box>
              <Box>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/settings">
                    <Settings />
                  </Route>
                </Switch>
              </Box>
            </VStack>
          </Grid>
        </Box>
        <Box as="footer" p={5}>
          <h3>© 2024 SaaS Platform, Inc.</h3>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
