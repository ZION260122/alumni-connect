import { Box, Button, Flex, Image, Img, Input, Text } from "@chakra-ui/react";
import "./home.scss";

const Home = () => {
  return (
    <Box h="100vh" marginRight={"8rem"} marginLeft={"8rem"}  mt={"2rem"} bg={"gray.100"} p={4}>
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
              <Text marginTop={3} marginBottom={3} fontSize={16} textAlign={"center"}>
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

        <Flex  paddingLeft={2} paddingRight={2} w={"100%"} direction={"column"}>
          <Flex alignItems={"center"} bg={"gray.dark"} borderRadius={"10px"} justifyContent={"space-between"} >
            <Flex alignItems={"center"}>
            <Flex  padding={4} gap={2}>
              <Image
                h={8}
                w={8}
                borderRadius={"50%"}
                src="..\src\assets\profile.png"
              />
            </Flex>
            <Flex width={"40vw"} >
              <Input type="Text" fontWeight={600} placeholder=" Write Your First Post " />
            </Flex>
            </Flex>
            <Flex paddingRight={4}>
            {/* <Button
              fontWeight={600}
              bg="gray.light"
              color="white"
              ml={4}
              _hover={{
                bg: "white",
                color: "gray.800",
                border: "1px solid black",
              }}
            >              Post
            </Button> */}
            </Flex>

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
