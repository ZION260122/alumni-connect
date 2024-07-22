import { Box, Button, Flex, Image, Img, Input, Text } from "@chakra-ui/react";
import "./home.scss";

const Home = () => {
  return (
    <Box h="100vh" marginRight={"8rem"} marginLeft={"8rem"} mt={"2rem"} p={4}>
      <Flex justifyContent="space-between" h="100%">
        <Flex alignItems={"left"}>
          <Flex
            h={"27.5rem"}
            w={"15rem"}
            bg={"gray.dark"}
            borderRadius={"10px"}
            direction="column"
          >
            <Flex justifyContent={"center"}>
              <Img
                src="..\src\assets\profile.png"
                h={20}
                w={20}
                borderRadius={"50%"}
                mt={10}
              />
            </Flex>
            <Box gap={4} p={4}>
              <Text fontSize={16} textAlign={"center"}>
                Micheal Jackson
              </Text>
              <Text
                marginTop={3}
                marginBottom={3}
                fontSize={16}
                textAlign={"center"}
              >
                Web Development Enthusiast | Building Projects with React &
                Node.js | Mechanical Engineering Student at HBTU | Open to
                Opportunities |
              </Text>
            </Box>
            <Flex mb={2}>
              <Box h={0.2} w={"100%"} bg={"gray.200"} />
            </Flex>
            <Flex justifyContent={"space-around"}>
              <Flex gap={2} alignItems={"center"} direction={"column"}>
                <Text cursor={"pointer"} fontSize={15}>
                  Followers
                </Text>
                <Text fontSize={13}>1000</Text>
              </Flex>
              <Box h={"100%"} w={0.001} bg={"gray.200"} />
              <Flex gap={2} alignItems={"center"} direction={"column"}>
                <Text cursor={"pointer"} fontSize={15}>
                  Following
                </Text>
                <Text fontSize={13}>2000</Text>
              </Flex>
            </Flex>
            <Flex>
              <Box mt={2} h={0.2} w={"100%"} bg={"gray.200"} />
            </Flex>
            <Box mt={2.5}>
              <Flex justifyContent={"center"}>
                <Text fontSize={20}>Profile</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Flex px={4} w={"100%"} alignItems={"center"} direction={"column"}>
          <Flex
            alignItems={"center"}
            bg={"gray.dark"}
            borderRadius={"10px"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Flex padding={4} gap={2}>
                <Image
                  h={8}
                  w={8}
                  borderRadius={"50%"}
                  src="..\src\assets\profile.png"
                />
              </Flex>
              <Flex width={"35vw"}>
                <Input
                  type="Text"
                  fontWeight={600}
                  placeholder=" Write Your First Post "
                />
              </Flex>
            </Flex>
            <Flex>
              <Button
                fontWeight={600}
                bg="gray.light"
                color="white"
                ml={4}
                _hover={{
                  bg: "white",
                  color: "gray.800",
                  border: "1px solid black",
                }}
              >
                {" "}
                Post
              </Button>
            </Flex>
          </Flex>
          <Flex
            bg={"gray.dark"}
            borderRadius={"10px"}
            height={"30rem"}
            w={"100%"}
            my={4}
            px={4}
            direction={"column"}
          >
            <Flex maxHeight={"10%"} gap={3} my={4} alignItems={"center"}>
              <Image
                h={8}
                w={8}
                borderRadius={"50%"}
                src="https://bit.ly/dan-abramov"
              />
              <Text my={2} fontSize={"14px"}>Micheal Jackson</Text>
            </Flex>
            <Text fontSize={"15px"}>
              Postman is very usefull Tool for API testing try it out sometime!!
            </Text>
            <Image
              h={"20rem"}
              w={"40rem"}
              src="data:image/png;base64,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"
            />
          </Flex>
        </Flex>

        <Flex alignItems={"right"}>
          <Flex
            h={"26rem"}
            w={"15rem"}
            bg={"gray.dark"}
            borderRadius={"10px"}
            direction="column"
          >
            <Flex justifyContent={"center"}>
              <Text fontSize={25}>Jobs</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
