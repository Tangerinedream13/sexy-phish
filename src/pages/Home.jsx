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
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      transition="all 0.2s ease"
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
          colorScheme="pink"
          px={3}
          py={1}
          rounded="full"
          boxShadow="md"
        >
          {actLabel}
        </Badge>
      </Box>

      <VStack align="start" spacing={4} p={6}>
        <Box>
          <Heading size="lg" color="gray.800">
            {title}
          </Heading>
          <Text color="pink.600" fontWeight="semibold" mt={1}>
            {subtitle}
          </Text>
        </Box>

        <Text color="gray.600">{description}</Text>

        <Text color="gray.500" fontSize="sm">
          Themes: {themes}
        </Text>

        <Button
          mt={2}
          colorScheme="pink"
          onClick={onClick}
          isDisabled={isDisabled}
          alignSelf="start"
        >
          {buttonText}
        </Button>
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

              <Text color="gray.600" maxW="2xl"></Text>

              <Button
                colorScheme="pink"
                size="lg"
                rounded="full"
                px={8}
                onClick={onStartAct1}
              >
                Start with Act 1
              </Button>
            </VStack>
          </Box>

          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Heading size="xl" color="pink.700">
              How It Works
            </Heading>
            <Text color="gray.600">
              Each act includes interactive choices that shape the story while
              highlighting common phishing and social engineering red flags.
              Players can click highlighted vocabulary words to learn terms like
              pretexting, urgency, emotional manipulation, and trust building in
              context.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            <ActCard
              actLabel="Act 1"
              title="hello.friend"
              subtitle="Meet Cute"
              description="Las Vegas. A cybersecurity summit. A charismatic operative. A billionaire CEO with too much access and not enough caution."
              themes="first contact, badge exposure, pretexting, trust building"
              image={act1Img}
              onClick={onStartAct1}
              buttonText="Play Act 1"
            />

            <ActCard
              actLabel="Act 2"
              title="trust_me.exe"
              subtitle="Situationship"
              description="The connection deepens. Boundaries blur. Trust becomes the vulnerability as private messages, quick favors, and small exceptions start to open bigger doors."
              themes="emotional trust, out-of-band requests, device access, exception abuse"
              image={act2Img}
              onClick={onStartAct2}
              buttonText="Play Act 2"
            />

            <ActCard
              actLabel="Act 3"
              title="this_feels_real.txt"
              subtitle="Damage Control"
              description="The emotional hook is set. Now the fallout begins as urgency, guilt, and confusion make the scam feel personal, believable, and dangerously real."
              themes="compromise, escalation, emotional manipulation, damage control"
              image={act3Img}
              onClick={onStartAct3}
              isDisabled={!onStartAct3}
              buttonText={onStartAct3 ? "Play Act 3" : "Coming Soon"}
            />
          </SimpleGrid>

          <Box w="full" bg="white" borderRadius="2xl" boxShadow="lg" p={6}>
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
                The goal is to make digital safety memorable, approachable, and
                useful in real life.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
