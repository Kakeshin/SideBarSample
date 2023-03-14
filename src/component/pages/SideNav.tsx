import { Button, VStack } from "@chakra-ui/react";
import {
  PhoneIcon,
  MoonIcon,
  SearchIcon,
  QuestionIcon,
  WarningIcon,
} from "@chakra-ui/icons";

const SideNav = () => {
  return (
    <VStack>
      <Button leftIcon={<PhoneIcon />} bg="#74AECB" color="gray.100" w="100%">
        Phone
      </Button>
      <Button leftIcon={<MoonIcon />} bg="#74AECB" color="gray.100" w="100%">
        Moon
      </Button>
      <Button leftIcon={<SearchIcon />} bg="#74AECB" color="gray.100" w="100%">
        Search
      </Button>
      <Button
        leftIcon={<QuestionIcon />}
        bg="#74AECB"
        color="gray.100"
        w="100%"
      >
        Questrion
      </Button>
      <Button leftIcon={<WarningIcon />} bg="#74AECB" color="gray.100" w="100%">
        Warning
      </Button>
    </VStack>
  );
};
export default SideNav;
