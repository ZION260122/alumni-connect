import { IoChevronDownCircleOutline, IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const Header = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} borderBottom={`2px solid ${borderColor}`}>
        <Flex alignItems={"center"}>
          <Box cursor={"pointer"} bg=".icon-container" p={4}>
            <Text fontSize="xl" fontWeight="bold" width="200px">
              Alumni-Connect
            </Text>
          </Box>
          <Box marginLeft={4}>
            <Input
              type="text"
              placeholder="Search for connections, alumni, and more..."
            />
          </Box>
        </Flex>
        <Flex
          cursor={"pointer"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginRight={4}
          gap={10}
        >
          <FaHome size={24} />
          <IoPeople size={24} />
          <IoIosChatbubbles size={24} />
          <IoIosNotifications size={24} />
          <Stack direction="row">
            <Switch colorScheme="teal" size="lg" />
          </Stack>
          <Menu>
            <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
              <Img
                src="..\src\assets\profile.png"
                h={8}
                w={8}
                borderRadius={"50%"}
              />
            </MenuButton>
            <MenuList fontSize={15}>
              <MenuItem>profile</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
