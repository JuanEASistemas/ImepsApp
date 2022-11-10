import {
  Center,
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  useTheme
} from 'native-base';

export const Login = () => {
  const theme = useTheme();
  return ( 
      <Center w="100%" h="100%" bg={theme.colors.secondary[100]}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                I'm a new user.
              </Text>
              <Link href="#">Sign Up</Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
  );
};
