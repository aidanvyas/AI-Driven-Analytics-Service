import React from 'react';
import { useColorMode, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Tooltip label={`Switch to ${isDark ? 'light' : 'dark'} mode`} aria-label="A tooltip">
      <Flex align="center">
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={isDark ? <FaSun /> : <FaMoon />}
        />
      </Flex>
    </Tooltip>
  );
};

export default ColorModeSwitcher;
