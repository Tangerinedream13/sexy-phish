import { useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import act1 from "../data/act1";
import ChoiceButton from "../components/ChoiceButton";
import RedFlagToast from "../components/RedFlagToast";

export default function PlayAct1({ onGoHome, onGoAct2 }) {
  const [sceneId, setSceneId] = useState(act1.startSceneId);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const scene = act1.scenes?.[sceneId];

  function goToScene(nextSceneId) {
    if (!nextSceneId) {
      setSceneId(act1.startSceneId);
      setHistory([]);
      setFuture([]);
      return;
    }

    setHistory((prev) => [...prev, sceneId]);
    setSceneId(nextSceneId);
    setFuture([]);
  }

  function goBack() {
    if (history.length === 0) return;

    const previousSceneId = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setFuture((prev) => [sceneId, ...prev]);
    setHistory(newHistory);
    setSceneId(previousSceneId);
  }

  function goForward() {
    if (future.length === 0) return;

    const nextSceneId = future[0];
    const newFuture = future.slice(1);

    setHistory((prev) => [...prev, sceneId]);
    setFuture(newFuture);
    setSceneId(nextSceneId);
  }

  if (!scene) {
    return (
      <Box minH="100vh" bg="pink.50" p={6}>
        <Box maxW="420px" mx="auto" bg="white" borderRadius="2xl" p={5}>
          <Heading size="md" mb={2}>
            Scene not found
          </Heading>
          <Text opacity={0.8}>Couldn’t find sceneId: {sceneId}</Text>
          <Box mt={4}>
            <ChoiceButton
              onClick={() => {
                setSceneId(act1.startSceneId);
                setHistory([]);
                setFuture([]);
              }}
            >
              Restart Act 1
            </ChoiceButton>
          </Box>
        </Box>
      </Box>
    );
  }

  const lines = Array.isArray(scene.text)
    ? scene.text
    : [String(scene.text ?? "")];

  const toast = scene.ui?.showToast ?? null;

  const redFlags = useMemo(() => {
    const keys = Array.isArray(scene.redFlags) ? scene.redFlags : [];
    return keys.map((k) => ({
      key: k,
      description: act1.glossary?.redFlags?.[k] ?? "",
    }));
  }, [scene]);

  const choices = Array.isArray(scene.choices) ? scene.choices : [];
  const isEndScene = !!scene.end;

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
          <HStack justify="space-between" align="center">
            <Button
              onClick={goBack}
              isDisabled={history.length === 0}
              variant="outline"
              colorScheme="pink"
              size="sm"
            >
              ←
            </Button>

            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              Act 1
            </Text>

            <Button
              onClick={goForward}
              isDisabled={future.length === 0}
              variant="outline"
              colorScheme="pink"
              size="sm"
            >
              →
            </Button>
          </HStack>

          <Stack gap={1}>
            <Heading size="md">{scene.title}</Heading>
            {scene.location ? (
              <Text fontSize="sm" opacity={0.7}>
                {scene.location}
              </Text>
            ) : null}
          </Stack>

          {toast?.body ? (
            <RedFlagToast
              title={toast.title ?? "Note"}
              message={toast.body}
              kind={toast.kind}
            />
          ) : null}

          {redFlags.length ? (
            <HStack wrap="wrap" gap={2}>
              {redFlags.map((rf) => (
                <Badge key={rf.key} variant="outline" title={rf.description}>
                  {rf.key}
                </Badge>
              ))}
            </HStack>
          ) : null}

          <Stack gap={3}>
            {lines.map((line, idx) => (
              <Text key={idx} fontSize="md" lineHeight="1.6">
                {line}
              </Text>
            ))}
          </Stack>

          {isEndScene ? (
            <Box
              border="1px solid"
              borderColor="green.200"
              bg="green.50"
              p={3}
              borderRadius="lg"
            >
              <Text fontSize="sm" fontWeight="800">
                Outcome:{" "}
                {scene.end.outcome === "high_risk"
                  ? "High Risk"
                  : scene.end.outcome === "trust_gain"
                  ? "Trust Gain"
                  : "Neutral"}
              </Text>

              {scene.end.hook ? (
                <Text fontSize="sm" opacity={0.85} mt={1} mb={3}>
                  {scene.end.hook}
                </Text>
              ) : null}

              <HStack pt={2} spacing={3}>
                <Button colorScheme="pink" variant="outline" onClick={onGoHome}>
                  Return Home
                </Button>
                <Button colorScheme="pink" onClick={onGoAct2}>
                  Continue to Act 2
                </Button>
              </HStack>
            </Box>
          ) : null}

          {!isEndScene ? (
            <Stack gap={2} pt={1}>
              {choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  onClick={() => {
                    if (!choice.next) {
                      setSceneId(act1.startSceneId);
                      setHistory([]);
                      setFuture([]);
                      return;
                    }
                    goToScene(choice.next);
                  }}
                >
                  {choice.label}
                </ChoiceButton>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
}