import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./registration.scss";

const SignUp = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "35rem" });
  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt={20} flexDirection={flexDirection}>
          <Flex
            h="25rem"
            justifyContent="center"
            display={imageDisplay}
          >
            <Box w="40rem">
              <Image height="25rem" src="..\src\assets\profile.png" />
            </Box>
          </Flex>
          <Flex
            gap={5}
            h="25rem"
            w={formWidth}
            bg="gray.600"
            alignItems="center"
            direction="column"
            p={5}
          >
            <Text mt={5} mb={3} fontSize="20px" textAlign="center">
              Build Your Professional Life in Society
            </Text>
            <Flex w="100%">
              <Flex marginX={2} flex="1">
                <Input type="text" placeholder="First Name" />
              </Flex>
              <Flex marginX={2} flex="1">
                <Input type="text" placeholder="Last Name" />
              </Flex>
            </Flex>
            <Flex w="100%">
              <Flex marginX={2} flex="1">
                <Input type="email" placeholder="College Email ID" />
              </Flex>
              <Flex marginX={2} flex="1">
                <Input type="text" placeholder="Branch/Class" />
              </Flex>
            </Flex>
            <Flex w="100%">
              <Flex marginX={2} flex="1">
                <Input type="password" placeholder="Password (6+ characters)" />
              </Flex>
              <Flex marginX={2} flex="1">
                <Input type="password" placeholder="Confirm Password" />
              </Flex>
            </Flex>
            <Button>Create Account</Button>
            <Flex gap={2} fontSize="13px">
              <Text>Already have an account?</Text>
              <Text cursor="pointer" color="blue.500">Sign In</Text>
            </Flex>
            <Divider />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
