import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
  }: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      target='_blank'
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
    </chakra.button>
  ); 
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position='fixed'
      width='100%'
    >
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction='column'
      spacing={4}
      justify='center'
      align='center'
    >
      <Stack direction={'row'} spacing={6}>
        <SocialButton label={'YouTube'} href={'https://www.linkedin.com/in/andr%C3%A9moreno/'}>
            <FaLinkedinIn />
        </SocialButton>
        <SocialButton label={'Instagram'}  href={'https://www.instagram.com/demoreno2/'}>
            <FaInstagram />
        </SocialButton>
      </Stack>
    </Container>
    </Box>
  );
}

export default Footer;