import { Image, HStack, VStack, Heading, Stack } from "@chakra-ui/react";
import SideNav from "./SideNav";

const Menu = () => {
  return (
    <VStack>
      <HStack>
        <Image src="src/assets/logo_only.png" w="4%" />
        <Heading color="#74AECB">KAKESHIN LEGENDS</Heading>
      </HStack>
      <HStack ml="1%">
        <SideNav />
        <VStack>
          <Heading color="gray.400" bg="white" fontSize="2xl">
            会社情報
          </Heading>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Menu;
