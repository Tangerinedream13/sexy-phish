import { Box, HStack, Text } from "@chakra-ui/react";

export default function RedFlagToast({ title = "Red flag", message }) {
  if (!message) return null;

  return (
    <Box
      border="1px solid"
      borderColor="orange.200"
      bg="orange.50"
      borderRadius="xl"
      p={3}
    >
      <HStack justify="space-between" align="start">
        <Text fontWeight="800" fontSize="sm" color="orange.800">
          {title}
        </Text>
      </HStack>
      <Text mt={1} fontSize="sm" color="orange.900" opacity={0.9}>
        {message}
      </Text>
    </Box>
  );
}