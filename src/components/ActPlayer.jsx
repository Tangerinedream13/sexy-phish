import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Badge,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function ActPlayer({
  act,
  onHome,
  onNextAct,
  nextActLabel,
  isFinalAct = false,
}) {
  const [currentSceneId, setCurrentSceneId] = useState(act.startSceneId);
  const [activeFlag, setActiveFlag] = useState(null);

  const scene = useMemo(
    () => act.scenes[currentSceneId],
    [act, currentSceneId],
  );

  const handleChoice = (choice) => {
    setActiveFlag(null);
    if (!choice.next) return;
    setCurrentSceneId(choice.next);
  };

  const handleRestart = () => {
    setActiveFlag(null);
    setCurrentSceneId(act.startSceneId);
  };

  const isEndingScene = Boolean(scene?.end);

  const getChoicePrompt = () => {
    if (act.meta?.actId === "act1" || act.meta?.actId === "act2") {
      return "What should Gemma do next?";
    }

    if (act.meta?.actId === "act3") {
      return "What should Rex do next?";
    }

    return "What happens next?";
  };

  const getRedFlagEntry = (flagKey) => {
    return (
      act?.glossary?.redFlags?.[flagKey] || act?.glossary?.[flagKey] || null
    );
  };

  const getCitationText = (sources = []) => {
    if (!sources.length) return "";
    return `[${sources.join(", ")}]`;
  };

  const activeEntry = activeFlag ? getRedFlagEntry(activeFlag) : null;

  return (
    <Box minH="100vh" bg="pink.50" display="flex" justifyContent="center" p={6}>
      <Box
        w="full"
        maxW="3xl"
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
        p={6}
      >
        <Stack gap={5}>
          <HStack justify="space-between" align="start" wrap="wrap">
            <VStack align="start" spacing={2}>
              <HStack spacing={3} wrap="wrap">
                <Badge colorScheme="pink">{act.meta?.title}</Badge>
                <Badge colorScheme="purple">{act.meta?.subtitle}</Badge>
              </HStack>

              <Heading size="lg">{scene.title}</Heading>

              {scene.location ? (
                <Text color="gray.500" fontSize="sm">
                  {scene.location}
                </Text>
              ) : null}
            </VStack>

            <Button
              variant="outline"
              colorScheme="pink"
              borderRadius="full"
              onClick={onHome}
            >
              🏠 Return Home
            </Button>
          </HStack>

          {scene.image ? (
            <Box
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="pink.100"
              boxShadow="md"
              bg="pink.50"
              display="flex"
              justifyContent="center"
            >
              <Box
                as="img"
                src={scene.image}
                alt={scene.title}
                w="100%"
                maxW="420px"
                h="auto"
                objectFit="contain"
              />
            </Box>
          ) : null}

          {scene.ui?.showToast ? (
            <Box
              bg="pink.50"
              borderRadius="xl"
              p={4}
              border="1px solid"
              borderColor="pink.100"
            >
              <Text fontWeight="bold" color="pink.700">
                {scene.ui.showToast.title}
              </Text>
              <Text color="gray.700">{scene.ui.showToast.body}</Text>
            </Box>
          ) : null}

          <Stack gap={3}>
            {scene.text?.map((line, index) => (
              <Text key={index} color="gray.700">
                {line}
              </Text>
            ))}
          </Stack>

          {scene.redFlags?.length ? (
            <Box>
              <Text fontWeight="semibold" color="gray.700" mb={2}>
                Vocabulary
              </Text>

              <Box display="flex" flexWrap="wrap" gap={2}>
                {scene.redFlags.map((flag) => {
                  const entry = getRedFlagEntry(flag);
                  const label = entry?.term || flag;
                  const isSelected = activeFlag === flag;

                  return (
                    <Badge
                      key={flag}
                      colorScheme="red"
                      variant={isSelected ? "solid" : "subtle"}
                      px={3}
                      py={1}
                      borderRadius="full"
                      cursor="pointer"
                      onClick={() =>
                        setActiveFlag((prev) => (prev === flag ? null : flag))
                      }
                    >
                      {label}
                    </Badge>
                  );
                })}
              </Box>

              {activeEntry ? (
                <Box
                  mt={3}
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="lg"
                  p={4}
                >
                  <Text fontWeight="bold" color="gray.800">
                    {activeEntry.term}
                  </Text>
                  <Text color="gray.700" mt={1}>
                    {activeEntry.definition}
                  </Text>
                  {activeEntry.sources?.length ? (
                    <Text color="gray.500" fontSize="sm" mt={2}>
                      Sources {getCitationText(activeEntry.sources)}
                    </Text>
                  ) : null}
                </Box>
              ) : (
                <Text color="gray.500" fontSize="sm" mt={2}>
                  Click a vocabulary term to see its definition and citation.
                </Text>
              )}
            </Box>
          ) : null}

          {scene.end ? (
            <Box
              bg="purple.50"
              borderRadius="xl"
              p={4}
              border="1px solid"
              borderColor="purple.100"
            >
              <Text fontWeight="bold" color="purple.700">
                Outcome: {scene.end.outcome}
              </Text>
              <Text color="gray.700">{scene.end.hook}</Text>
            </Box>
          ) : null}

          <Box borderTop="1px solid" borderColor="gray.200" />

          {!isEndingScene ? (
            <VStack align="stretch" spacing={3}>
              <Text fontWeight="semibold" color="gray.700">
                {getChoicePrompt()}
              </Text>

              {scene.choices?.map((choice) => (
                <Button
                  key={choice.id}
                  colorScheme="pink"
                  variant="outline"
                  justifyContent="flex-start"
                  whiteSpace="normal"
                  h="auto"
                  py={4}
                  onClick={() => handleChoice(choice)}
                >
                  {choice.label}
                </Button>
              ))}
            </VStack>
          ) : (
            <VStack align="stretch" spacing={3}>
              <Button colorScheme="pink" onClick={handleRestart}>
                Restart {act.meta?.subtitle}
              </Button>

              {isFinalAct ? (
                <Button variant="outline" onClick={onHome}>
                  Return Home
                </Button>
              ) : (
                <>
                  <Button colorScheme="purple" onClick={onNextAct}>
                    {nextActLabel}
                  </Button>
                  <Button variant="outline" onClick={onHome}>
                    Return Home
                  </Button>
                </>
              )}
            </VStack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
