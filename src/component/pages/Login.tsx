import { useState } from "react";
import {
  Input,
  Button,
  Center,
  VStack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Card,
  CardBody,
  InputRightElement,
  FormHelperText,
  Link,
  Image,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  return (
    <Center h="100vh">
      <VStack>
        <Image src="src/assets/logo_only.png" w="35%" />
        <Heading color="#74AECB">KAKESHIN LEGENDS</Heading>
        <Card>
          <CardBody>
            <VStack>
              <FormControl>
                <InputGroup mx="auto">
                  <InputLeftElement>
                    <EmailIcon color="gray.300" />
                  </InputLeftElement>
                  <Input isRequired type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement>
                    <UnlockIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement w="27%">
                    <Button h="75%" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="gray.400">forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bg="#74AECB"
                color="gray.100"
                w="full"
                onClick={() => navigate("/menu")}
              >
                Login
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Center>
  );
};

export default Login;
