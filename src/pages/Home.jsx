import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Home({ onStartAct1 }) {
  return (
    <Box minH="100vh" bg="pink.50" px={6} py={12}>
      <Container maxW="5xl">
        <VStack spacing={10}>
          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Badge colorScheme="pink" px={3} py={1} rounded="full">
              Romance • Deception • Social Engineering
            </Badge>

            <Heading size="2xl" color="pink.700">
              Sexy Phish
            </Heading>

            <Text fontSize="xl" color="gray.700">
              A cyber-thriller where attraction, trust, and manipulation become
              the attack surface.
            </Text>

            <Text color="gray.600">
              Play through interactive acts, spot red flags, and see how social
              engineering works when charm becomes a weapon.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            <Box bg="white" borderRadius="2xl" boxShadow="xl" p={6}>
              <VStack align="start" spacing={4}>
                <Badge colorScheme="pink">Act 1</Badge>

                <Heading size="lg">hello.friend</Heading>

                <Text color="gray.700" fontWeight="medium">
                  The Meet-Cute
                </Text>

                <Text color="gray.600">
                  Las Vegas. A cybersecurity summit. A charismatic operative. A
                  billionaire CEO with too much access and not enough caution.
                </Text>

                <Text color="gray.500" fontSize="sm">
                  Themes: first contact, badge exposure, pretexting, trust
                  building
                </Text>

                <Button mt={2} colorScheme="pink" onClick={onStartAct1}>
                  Play Act 1
                </Button>
              </VStack>
            </Box>

            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="lg"
              p={6}
              opacity={0.9}
            >
              <VStack align="start" spacing={4}>
                <Badge colorScheme="gray">Coming Soon</Badge>

                <Heading size="md" color="gray.700">
                  Future Acts
                </Heading>

                <Text color="gray.600">
                  More chapters, more red flags, more dangerous decisions.
                </Text>

                <Text color="gray.500" fontSize="sm">
                  Later add locked act cards here for Act 2, Act 3, recaps, and
                  continue game state.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
