import * as React from "react";
import { Text, Box } from "native-base";

export default function Hello() {
  return (
    <Box bg="primary.100" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Hi Batch 30
      </Text>
    </Box>
  );
}