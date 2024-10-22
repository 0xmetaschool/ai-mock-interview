import React from 'react';
import { Box, Flex, Text, Image, Link, IconButton, HStack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box 
      bg="white"
      py={4}
      width="100%"
      fontFamily="Inter, sans-serif"
      justifyContent="center"
      
    >
      <Divider />
      <Flex p="5" maxW="7xl" mx="auto" px={4} align="center" justify="space-between">
        <Box pl={4}>
          <HStack ml="0.25rem">
            <Image alt="crystal ball" src="https://metaschool.so/_next/static/media/crystalball.074cad21.webp" width="20px" height="20px" />
            <Text fontSize="20px" lineHeight="30%" fontWeight="600">metaschool</Text>
          </HStack>
        </Box>
        <Text fontSize="14px" color="rgb(102 102 102)" textAlign="center" flex={1} ml="8rem">
          &copy; {new Date().getFullYear()} Metaschool. All rights reserved
        </Text>
        <Box pr={4}>
          <Flex align="center" justify="flex-end">
            <Text mr={2}>Follow us on social </Text>
            <IconButton
              as={Link}
              href="https://discord.com/invite/vbVMUwXWgc"
              aria-label="Discord"
              icon={<Image src="https://metaschool.so/_next/static/media/discord-color-hd.c16c98e2.webp" alt="Discord" boxSize={6} width="20px" height="20px"/>}
              variant="ghost"
              _hover={{ opacity: 0.8 }}
            />
            <IconButton
              as={Link}
              href="https://twitter.com/0xmetaschool"
              aria-label="Twitter"
              icon={<Image src="https://metaschool.so/_next/static/media/x-black-hd.e25a2b72.webp" alt="X" boxSize={6} width="17px" height="17px"/>}
              variant="ghost"
              _hover={{ opacity: 0.8 }}
            />
            <IconButton
              as={Link}
              href="https://github.com/0xmetaschool"
              aria-label="GitHub"
              icon={<Image src="https://metaschool.so/_next/static/media/github-black-hd.55a2f989.webp" alt="GitHub" boxSize={6} width="19px" height="19px" />}
              variant="ghost"
              _hover={{ opacity: 0.8 }}
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/company/0xmetaschool/"
              aria-label="LinkedIn"
              icon={<Image src="https://metaschool.so/_next/static/media/linkedin-color-hd.e0e19119.webp" alt="LinkedIn" boxSize={6} width="24px" height="24px" />}
              variant="ghost"
              _hover={{ opacity: 0.8 }}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;