// src/components/GlossaryTerm.jsx
import { Tooltip, Text } from "@chakra-ui/react";

export default function GlossaryTerm({ termKey, glossary, sources, children }) {
  const entry = glossary?.redFlags?.[termKey] || glossary?.[termKey];

  if (!entry) {
    return <>{children}</>;
  }

  const citationText =
    entry.sources && entry.sources.length
      ? ` [${entry.sources.join(", ")}]`
      : "";

  const label = `${entry.definition}${citationText}`;

  return (
    <Tooltip
      label={label}
      hasArrow
      placement="top"
      openDelay={150}
      bg="gray.800"
      color="white"
      borderRadius="md"
      p={3}
      maxW="280px"
      whiteSpace="normal"
    >
      <Text
        as="span"
        cursor="help"
        textDecoration="underline"
        textDecorationStyle="dotted"
        textUnderlineOffset="2px"
      >
        {children}
      </Text>
    </Tooltip>
  );
}