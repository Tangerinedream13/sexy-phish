import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

export default function PlayAct2({ onBack }) {
  return (
    <Box
      minH="100vh"
      bg="pink.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Box w="380px" bg="white" borderRadius="2xl" boxShadow="xl" p={5}>
        <Stack gap={4}>
          <Heading size="md">Act 2: Situationship</Heading>
          <Text>The next act starts here.</Text>
          <Button colorScheme="pink" onClick={onBack}>
            Return Home
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}