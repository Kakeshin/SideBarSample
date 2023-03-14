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
import { Link } from "./../Link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
                  <Text pt="2">
                    <Link
                      mx="2"
                      size="sm"
                      to={import.meta.env.VITE_TWITTER_END_URL}
                      isExternal
                    >
                      Twitter <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                  <Text pt="2">
                    <Link
                      mx="2"
                      size="sm"
                      to={import.meta.env.VITE_INSTAGRAM_END_URL}
                      isExternal
                    >
                      Instagram <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                  <Text pt="2">
                    <Link
                      mx="2"
                      size="sm"
                      to={import.meta.env.VITE_GITHUB_END_URL}
                      isExternal
                    >
                      GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
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
