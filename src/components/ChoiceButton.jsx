import { Button } from "@chakra-ui/react";

export default function ChoiceButton({ children, onClick, isDisabled }) {
  return (
    <Button
      onClick={onClick}
      isDisabled={isDisabled}
      w="100%"
      variant="solid"
      bg="pink.500"
      color="white"
      _hover={{ bg: "pink.600" }}
      borderRadius="xl"
      py={6}
      whiteSpace="normal"
      textAlign="left"
    >
      {children}
    </Button>
  );
}