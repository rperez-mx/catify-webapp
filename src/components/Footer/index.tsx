import { Box, Button, chakra, CloseButton, Flex, HStack, Icon, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
import React from 'react'

export default function Footer() {
  return (
    <Flex
  w={{base:"calc(100vw)", lg:"calc(25vw)"}}
  position={'absolute'}
  marginBottom={'0'}
  marginRight={'0'}
  marginLeft={'0'}
  p={25}
  alignItems="center"
  justifyContent="center"
>
  <Flex
    w="full"
    as="footer"
    flexDir={{
      base: "column",
      sm: "row",
    }}
    align="center"
    justify="space-between"
    px="6"
    py="4"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
  >
    <HStack>

    <chakra.a
      href="#"
      fontSize="xl"
      fontWeight="bold"
      color="gray.600"
      _dark={{
        color: "white",
        _hover: {
          color: "gray.300",
        },
      }}
      _hover={{
        color: "gray.700",
      }}
      >
      Catify
    </chakra.a>

    <chakra.p
      py={{
        base: "2",
        sm: "0",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      >
      2022 &copy; All rights reserved
    </chakra.p>
      </HStack>

    <Flex mx="-2">
      <chakra.a
        href="https://www.instagram.com/_h0ld3n/"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Instagram"
      >
        <Icon as={FaInstagram} boxSize="5" viewBox="0 0 24 24" fill="currentColor">
          
        </Icon>
      </chakra.a>

      <chakra.a
        href="https://www.facebook.com/xb3rl1n"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Facebook"
      >
        <Icon as={FaFacebook} boxSize="5" viewBox="0 0 24 24" fill="currentColor">
        </Icon>
      </chakra.a>

      <chakra.a
        href="https://github.com/rperez-mx/catify-webapp"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Github"
      >
        <Icon as={FaGithub} boxSize="5" viewBox="0 0 24 24" fill="currentColor">
        </Icon>
      </chakra.a>
    </Flex>
  </Flex>
</Flex>
  )
}
