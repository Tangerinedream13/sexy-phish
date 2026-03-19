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
  
  export default function HomePage({ onStartAct1 }) {
    return (
      <Box
        minH="100vh"
        bgGradient="linear(to-b, gray.950, purple.950, black)"
        color="white"
        px={6}
        py={12}
      >
        <Container maxW="6xl">
          <VStack align="stretch" spacing={10}>
            <VStack align="start" spacing={4} maxW="3xl">
              <Badge
                colorScheme="pink"
                px={3}
                py={1}
                rounded="full"
                fontSize="0.8rem"
              >
                Romance • Deception • Social Engineering
              </Badge>
  
              <Heading
                size="2xl"
                lineHeight="1"
                bgGradient="linear(to-r, pink.300, purple.300, cyan.300)"
                bgClip="text"
              >
                Sexy Phish
              </Heading>
  
              <Text fontSize="xl" color="gray.300">
                A cyber-thriller where attraction, trust, and manipulation become
                the attack surface.
              </Text>
  
              <Text color="gray.400" maxW="2xl">
                Play through interactive acts, spot red flags, and watch how
                social engineering works when charm becomes a weapon.
              </Text>
  
              <HStack spacing={4} pt={2}>
                <Button
                  colorScheme="pink"
                  size="lg"
                  onClick={onStartAct1}
                >
                  Start Act 1
                </Button>
  
                <Button
                  variant="outline"
                  borderColor="whiteAlpha.400"
                  color="gray.200"
                  size="lg"
                >
                  How It Works
                </Button>
              </HStack>
            </VStack>
  
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={6}
                backdropFilter="blur(10px)"
                boxShadow="xl"
              >
                <VStack align="start" spacing={4}>
                  <Badge colorScheme="purple">Act 1</Badge>
  
                  <Heading size="lg">hello.friend</Heading>
  
                  <Text color="gray.300" fontWeight="medium">
                    The Meet-Cute
                  </Text>
  
                  <Text color="gray.400">
                    Las Vegas. A cybersecurity summit. A charismatic operative.
                    A billionaire CEO with too much access and not enough caution.
                  </Text>
  
                  <Text color="gray.500" fontSize="sm">
                    Themes: first contact, badge exposure, pretexting, trust
                    building
                  </Text>
  
                  <Button
                    mt={2}
                    colorScheme="pink"
                    onClick={onStartAct1}
                  >
                    Play Act 1
                  </Button>
                </VStack>
              </Box>
  
              <Box
                bg="whiteAlpha.50"
                border="1px dashed"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={6}
              >
                <VStack align="start" spacing={4}>
                  <Badge colorScheme="gray">Coming Soon</Badge>
  
                  <Heading size="md" color="gray.300">
                    Future Acts
                  </Heading>
  
                  <Text color="gray.400">
                    More chapters, more red flags, more dangerous decisions.
                  </Text>
  
                  <Text color="gray.500" fontSize="sm">
                    Later add locked act cards here for Act 2, Act 3,
                    recaps, and/or continue game state.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    );
  }