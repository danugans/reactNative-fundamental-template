import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, IconButton, HStack, Divider } from "native-base";
import { fontWeight } from "styled-system";

export default function FormNativeBase() {
  return (
    <Box safeArea bg="primary.100" flex={1} p={10} w="100%" mx="auto" justifyContent="center">
      <Heading size="lg">Welcome</Heading>
      <Heading size="lg">Sign in to continue</Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label _text={{ fontSize: { sm }, fontWeight: 600 }}>Email</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl>
          <FormControl.Label _text={{ fontSize: { sm }, fontWeight: 600 }}>Password</FormControl.Label>
          <Input type="password" />
          <Link _text={{ fontSize: { xs }, fontWeight: 700 }}>Forgot Password?</Link>
        </FormControl>
      </VStack>

      <VStack space={2}>
        <Button>Login</Button>
      </VStack>
    </Box>
  );
}
