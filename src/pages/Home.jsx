import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Badge,
  SimpleGrid,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import homeHero from "../assets/sexy_phish_home.png";
import act1Img from "../assets/sexy_phish_1.png";
import act2Img from "../assets/sexy_phish_2.png";
import act3Img from "../assets/sexy_phish_3.png";

function ActCard({
  actLabel,
  title,
  subtitle,
  description,
  themes,
  image,
  onClick,
  isDisabled = false,
  buttonText,
}) {
  const themeList = Array.isArray(themes)
    ? themes
    : String(themes)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      transition="all 0.2s ease"
      h="100%"
      display="flex"
      flexDirection="column"
      _hover={{
        transform: isDisabled ? "none" : "translateY(-6px)",
        boxShadow: isDisabled ? "xl" : "2xl",
      }}
    >
      <Box position="relative" bg="white">
        <Image
          src={image}
          alt={`${actLabel} preview`}
          w="100%"
          h={{ base: "180px", md: "210px" }}
          objectFit="contain"
          objectPosition="center center"
          bg="white"
          p={2}
        />
        <Badge
          position="absolute"
          top={4}
          left={4}
          bg="pink.500"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          boxShadow="md"
          textTransform="none"
        >
          {actLabel}
        </Badge>
      </Box>

      <VStack align="start" spacing={4} p={6} flex="1" w="full">
        <Box w="full">
          <Heading size="lg" color="gray.800">
            {title}
          </Heading>
          <Text color="pink.600" fontWeight="semibold" mt={1}>
            {subtitle}
          </Text>
        </Box>

        <Box flex="1" w="full">
          <Text color="gray.600">{description}</Text>
        </Box>

        <VStack align="start" spacing={3} w="full">
          <Box w="full">
            <Text fontWeight="semibold" fontSize="sm" color="gray.600" mb={2}>
              Themes:
            </Text>

            <Wrap spacing={2}>
              {themeList.map((theme) => (
                <WrapItem key={theme}>
                  <Badge
                    bg="pink.100"
                    color="pink.700"
                    px={2}
                    py={0.5}
                    borderRadius="full"
                    textTransform="none"
                    fontSize="0.7rem"
                    fontWeight="medium"
                  >
                    {theme}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Button
            bg="pink.500"
            color="white"
            _hover={{ bg: "pink.600" }}
            _active={{ bg: "pink.700" }}
            onClick={onClick}
            isDisabled={isDisabled}
            alignSelf="start"
          >
            {buttonText}
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default function Home({ onStartAct1, onStartAct2, onStartAct3 }) {
  return (
    <Box minH="100vh" bg="pink.50" px={6} py={{ base: 8, md: 12 }}>
      <Container maxW="6xl">
        <VStack spacing={10}>
          <Box
            w="full"
            maxW="4xl"
            mx="auto"
            bg="white"
            borderRadius="3xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="pink.100"
            px={{ base: 6, md: 10 }}
            py={{ base: 8, md: 10 }}
          >
            <VStack spacing={5} textAlign="center">
              <Image
                src={homeHero}
                alt="Sexy Phish homepage"
                w="100%"
                maxW={{ base: "280px", md: "420px" }}
                h={{ base: "180px", md: "260px" }}
                objectFit="contain"
                objectPosition="center center"
              />

              <Badge colorScheme="pink" px={4} py={1.5} rounded="full">
                Romance • Deception • Social Engineering
              </Badge>

              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                color="pink.700"
                lineHeight="shorter"
              >
                Sexy Phish
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="gray.700"
                maxW="3xl"
              >
                A Romance-Themed Cybersecurity Learning Experience
              </Text>

              <Text color="gray.600" maxW="2xl">
                Sexy-Phish is an interactive choose-your-own-adventure story
                that teaches phishing awareness through romance, deception, and
                social engineering.
              </Text>
            </VStack>
          </Box>

          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Heading size="xl" color="pink.700">
              How It Works
            </Heading>
            <Text color="gray.600">
              Each act includes interactive choices that shape the story while
              highlighting common phishing and social engineering red flags.
              Players can click highlighted vocabulary words to learn terms in
              context and see how trust, manipulation, urgency, and human
              factors shape decision making.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="full"
            alignItems="stretch"
          >
            <ActCard
              actLabel="Act 1"
              title="hello.friend"
              subtitle="Meet Cute"
              description="Gemma and Rex meet for the first time in Las Vegas at a cybersecurity conference. Rex is immediately charmed by Gemma, unaware that she is really after access to Cipher information."
              themes="social engineering, luring, warning flags"
              image={act1Img}
              onClick={onStartAct1}
              buttonText="Play Act 1"
            />

            <ActCard
              actLabel="Act 2"
              title="trust_me.exe"
              subtitle="Situationship"
              description="As the connection deepens, trust and attraction begin to lower defenses. What feels intimate and harmless starts opening the door to oversharing, access, and manipulation."
              themes="trust, oversharing, human factors"
              image={act2Img}
              onClick={onStartAct2}
              buttonText="Play Act 2"
            />

            <ActCard
              actLabel="Act 3"
              title="this_feels_real.txt"
              subtitle="Damage Control"
              description="The damage is done. Now the focus shifts to breach, fallout, response, and the challenge of fixing what trust allowed to break."
              themes="breach, urgency, manipulation, response"
              image={act3Img}
              onClick={onStartAct3}
              isDisabled={!onStartAct3}
              buttonText={onStartAct3 ? "Play Act 3" : "Coming Soon"}
            />
          </SimpleGrid>

          <Box
            w="full"
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            mt={{ base: 4, md: 8 }}
          >
            <VStack align="start" spacing={3}>
              <Heading size="md" color="pink.700">
                Learning Structure
              </Heading>
              <Text color="gray.700">
                Rather than presenting cybersecurity as purely technical or
                intimidating, Sexy-Phish makes it relatable, story-driven, and
                interactive.
              </Text>
              <Text color="gray.600">
                By combining romance-inspired storytelling, decision-based
                learning, red-flag recognition, and click-to-define
                cybersecurity vocabulary, the project helps players understand
                how phishing attacks exploit trust, emotion, urgency, and human
                behavior.
              </Text>
              <Text color="gray.600">
                The goal is to make cybersecurity awareness memorable,
                approachable, and useful in real life.
              </Text>
            </VStack>
          </Box>

          <Box
            w="full"
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            border="1px solid"
            borderColor="pink.100"
          >
            <VStack align="start" spacing={4}>
              <Heading size="md" color="pink.700">
                Academic Foundation
              </Heading>

              <Text color="gray.700">
                Sexy-Phish is informed by research on social engineering,
                phishing awareness, romance scams, and the human factors that
                influence cybersecurity decisions. These sources helped shape
                the story structure, vocabulary terms, and learning goals
                throughout the project.
              </Text>

              <VStack align="start" spacing={3} color="gray.600" fontSize="sm">
                <Text>
                  <Text as="span" fontWeight="bold" color="pink.700">
                    [1]
                  </Text>{" "}
                  Akeiber, H. J. (2025).{" "}
                  <Text as="span" fontStyle="italic">
                    The evolution of social engineering attacks: A cybersecurity
                    engineering perspective.
                  </Text>
                </Text>

                <Text>
                  <Text as="span" fontWeight="bold" color="pink.700">
                    [2]
                  </Text>{" "}
                  Hatfield, J. M. (2018).{" "}
                  <Text as="span" fontStyle="italic">
                    Social engineering in cybersecurity: The evolution of a
                    concept.
                  </Text>
                </Text>

                <Text>
                  <Text as="span" fontWeight="bold" color="pink.700">
                    [3]
                  </Text>{" "}
                  Iovine, A. (2026).{" "}
                  <Text as="span" fontStyle="italic">
                    What are romance scams and how can you avoid them?
                  </Text>
                </Text>

                <Text>
                  <Text as="span" fontWeight="bold" color="pink.700">
                    [4]
                  </Text>{" "}
                  Wang, Z., Sun, L., & Zhu, H. (2020).{" "}
                  <Text as="span" fontStyle="italic">
                    Defining social engineering in cybersecurity.
                  </Text>
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}