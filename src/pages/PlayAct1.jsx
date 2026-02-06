import { useMemo, useState } from "react";
import { Badge, Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

import act1 from "../data/act1";
import ChoiceButton from "../components/ChoiceButton";
import RedFlagToast from "../components/RedFlagToast";

export default function PlayAct1() {
  const [sceneId, setSceneId] = useState(act1.startSceneId);
  const scene = act1.scenes?.[sceneId];

  // Fallback if the sceneId is invalid
  if (!scene) {
    return (
      <Box minH="100vh" bg="pink.50" p={6}>
        <Box maxW="420px" mx="auto" bg="white" borderRadius="2xl" p={5}>
          <Heading size="md" mb={2}>
            Scene not found
          </Heading>
          <Text opacity={0.8}>Couldn’t find sceneId: {sceneId}</Text>
          <Box mt={4}>
            <ChoiceButton onClick={() => setSceneId(act1.startSceneId)}>
              Restart Act 1
            </ChoiceButton>
          </Box>
        </Box>
      </Box>
    );
  }

  const lines = Array.isArray(scene.text) ? scene.text : [String(scene.text ?? "")];
  const toast = scene.ui?.showToast ?? null;

  const redFlags = useMemo(() => {
    const keys = Array.isArray(scene.redFlags) ? scene.redFlags : [];
    return keys.map((k) => ({
      key: k,
      description: act1.glossary?.redFlags?.[k] ?? "",
    }));
  }, [sceneId]);

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
      {/* Phone UI */}
      <Box w="380px" bg="white" borderRadius="2xl" boxShadow="xl" p={5}>
        <Stack gap={4}>
          <Stack gap={1}>
            <Heading size="md">{scene.title}</Heading>
            {scene.location ? (
              <Text fontSize="sm" opacity={0.7}>
                {scene.location}
              </Text>
            ) : null}
          </Stack>

          {/* Optional toast-style callout */}
          {toast?.body ? (
            <RedFlagToast
              title={toast.title ?? "Note"}
              message={toast.body}
              kind={toast.kind}
            />
          ) : null}

          {/* Red flags as chips */}
          {redFlags.length ? (
            <HStack wrap="wrap" gap={2}>
              {redFlags.map((rf) => (
                <Badge
                  key={rf.key}
                  variant="outline"
                  title={rf.description}
                >
                  {rf.key}
                </Badge>
              ))}
            </HStack>
          ) : null}

          {/* Scene body */}
          <Stack gap={3}>
            {lines.map((line, idx) => (
              <Text key={idx} fontSize="md" lineHeight="1.6">
                {line}
              </Text>
            ))}
          </Stack>

          {/* End scene callout */}
          {isEndScene ? (
            <Box border="1px solid" borderColor="green.200" bg="green.50" p={3} borderRadius="lg">
              <Text fontSize="sm" fontWeight="800">
                Outcome:{" "}
                {scene.end.outcome === "high_risk"
                  ? "High Risk"
                  : scene.end.outcome === "trust_gain"
                  ? "Trust Gain"
                  : "Neutral"}
              </Text>
              {scene.end.hook ? (
                <Text fontSize="sm" opacity={0.85}>
                  {scene.end.hook}
                </Text>
              ) : null}
            </Box>
          ) : null}

          {/* Choices */}
          <Stack gap={2} pt={1}>
            {choices.map((choice) => (
              <ChoiceButton
                key={choice.id}
                onClick={() => {
                  // If next is null, just restart (no router needed)
                  if (!choice.next) {
                    setSceneId(act1.startSceneId);
                    return;
                  }
                  setSceneId(choice.next);
                }}
              >
                {choice.label}
              </ChoiceButton>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}