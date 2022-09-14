import { Badge, Box, Button, chakra, Flex, Skeleton } from '@chakra-ui/react';
import { FaHeart, FaStar, FaForward, FaShare } from 'react-icons/fa'
import React from 'react'

export default function CardSkeleton() {
  return (
   
    <Flex
    bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="sm"
      mx="auto"
    >
      <Skeleton startColor='pink.500' endColor='orange.500' rounded={'lg'}>
      <Box
        bg="gray.300"
        w={{base:'calc(75vw)',lg:'calc(50vw)'}}
        h={{base:'calc(50vh)', lg: 'calc(60vh)'}}
        rounded="lg"
        shadow="md"
        bgSize="cover"
        bgPos="center"
        style={{
          backgroundImage:
            `url("https://cataas.com/cat/")`,
        }}
      >
        <chakra.span
        pos="fixed"
        px={2}
        py={1}
        fontSize={{base:"sm", lg: "md"}}
        fontWeight="bold"
        lineHeight="none"
        color="red.100"
        transform={{base: "translate(-250%,50%)",sm: "translate(-350%,50%)", md: "translate(-530%,50%)",lg: "translate(-430%, 100%)", xl:"translate(-790%, 100%)"}}
        bg={{base:"red.600"}}
        rounded="full"
      >
        0 likes
      </chakra.span>
      </Box>
      </Skeleton>
      <Box
          w={{
            base: 56,
            md: 64,
          }}
          
          mt={{base:'-4em',lg:'-4em'}}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={3}
            px={4}
            bg="whiteAlpha.600"
            _dark={{
              bg: "blackAlpha.600",
            }}
          >
            <Button
              // leftIcon={<FaStar />}
              bg="yellow.300"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="full"
              textTransform="uppercase"
              _hover={{
                bg: "yellow.500",
                _dark: {
                  bg: "yellow.400",
                },
              }}
              _focus={{
                bg: "yellow.500",
                _dark: {
                  bg: "yellow.400",
                },
                outline: "none",
              }}
            >
              <FaStar />
            </Button>
            <Button
              // leftIcon={<FaHeart />}
              bg="red.400"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="full"
              textTransform="uppercase"
              _hover={{
                bg: "red.500",
                _dark: {
                  bg: "red.400",
                },
              }}
              _focus={{
                bg: "red.500",
                _dark: {
                  bg: "red.400",
                },
                outline: "none",
              }}
              
            >
              <FaHeart />
            </Button>
            <Button
              // leftIcon={<FaHeart />}
              bg="blue.400"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="full"
              textTransform="uppercase"
              _hover={{
                bg: "blue.300",
                _dark: {
                  bg: "blue.400",
                },
              }}
              _focus={{
                bg: "blue.500",
                _dark: {
                  bg: "blue.400",
                },
                outline: "none",
              }}
            >
              <FaShare />
            </Button>
            <Button
              // leftIcon={<FaForward />}
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="full"
              textTransform="uppercase"
              _hover={{
                bg: "gray.500",
                _dark: {
                  bg: "gray.400",
                },
              }}
              _focus={{
                bg: "gray.500",
                _dark: {
                  bg: "gray.400",
                },
                outline: "none",
              }}
            
            >
              <FaForward />
            </Button>
          </Flex>
          <chakra.h3
            py={5}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            bg="blackAlpha.800"
            color="gray.800"
            _dark={{
              bg: "whiteAlpha.800",
              color: "white",
            }}
            
            letterSpacing={1}
          >
            
        <Skeleton startColor='pink.500' endColor='orange.500' height='25px' />
          </chakra.h3>
        
       
  
        
      </Box>
    </Flex>
  </Flex>
  )
}
