import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Badge,
  Wrap,
  WrapItem,
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

  const scene = useMemo(() => act.scenes[currentSceneId], [act, currentSceneId]);

  const handleChoice = (choice) => {
    if (!choice.next) return;
    setCurrentSceneId(choice.next);
  };

  const handleRestart = () => {
    setCurrentSceneId(act.startSceneId);
  };

  const isEndingScene = Boolean(scene?.end);

  return (
    <Box minH="100vh" bg="pink.50" display="flex" justifyContent="center" p={6}>
      <Box w="full" maxW="3xl" bg="white" borderRadius="2xl" boxShadow="xl" p={6}>
        <Stack gap={5}>
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
                Red Flags
              </Text>
              <Wrap>
                {scene.redFlags.map((flag) => (
                  <WrapItem key={flag}>
                    <Badge
                      colorScheme="red"
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {flag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
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
                What do you do next?
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