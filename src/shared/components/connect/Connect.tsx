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
  useTheme,
  Alert
} from 'native-base';
import { useConnectContext, useAppThemeContext } from '../../contexts';


interface IConnectProps {
  children: React.ReactNode;
}

export const Connect: React.FC<IConnectProps> = ({ children }) => {
  const theme = useTheme();
  const { themeName } = useAppThemeContext();
  const { isConnected } = useConnectContext();


  if (isConnected === true) 
  return (
    <>{children}</>
  );

  if (isConnected === false) 
  return (
    <Center w="100%" h="100%" bg={theme.colors.secondary[100]}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Problemas na conexão!
        </Heading>
      </Box>
    </Center> 
  );

  //handleConnect();
  return (
    <Center w="100%" h="100%" bg={theme.colors.secondary[100]}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
            Conectando com o servidor!
        </Heading>
      </Box>
    </Center> 
  );
  
};

