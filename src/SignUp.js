import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';

const SignUp = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateInput = (name, value) => {
    let error;
    switch (name) {
      case 'name':
        if (!value) error = 'Name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Here you would typically handle the registration logic,
    // for example, sending a request to your backend service.
    // Since the backend is not yet set up, we'll simulate a successful sign up.

    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      // Reset form
      setInput({
        name: '',
        email: '',
        password: '',
      });
      setErrors({});
    }, 2000);
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => !error);
  };

  return (
    <Box p={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading>Sign Up</Heading>
        <FormControl id="name" isRequired isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" isRequired isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
          loadingText="Submitting"
          isDisabled={!isFormValid()}
        >
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;
