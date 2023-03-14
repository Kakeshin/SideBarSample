import {
  Image,
  Stack,
  HStack,
  VStack,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import SideNav from "./SideNav";

const Menu = () => {
  return (
    <VStack>
      <HStack>
        <Image src="src/assets/logo_only.png" w="4%" />
        <Heading color="#74AECB">KAKESHIN LEGENDS</Heading>
      </HStack>
      <HStack>
        <SideNav />
        <VStack bg="white" color="gray.400">
          <Card>
            <CardHeader>
              <Heading size="md">My Profile</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    name
                  </Heading>
                  <Text pt="2" size="sm">
                    Kakeshin
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    age
                  </Heading>
                  <Text pt="2" size="sm">
                    Unknown
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    hometown
                  </Heading>
                  <Text pt="2" size="sm">
                    Hokkaido
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    sns
                  </Heading>
                  <Text pt="2" size="sm">
                    Twitter
                  </Text>
                  <Text pt="2" size="sm">
                    Instagram
                  </Text>
                  <Text pt="2" size="sm">
                    GitHub
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Menu;
