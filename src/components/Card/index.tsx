import { Badge, Box, Button, chakra, Flex } from '@chakra-ui/react';
import React from 'react'
import { Cat, getCat } from '../../app/features/cats/catSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { FaHeart, FaStar, FaForward } from 'react-icons/fa'

export default function Card() {
  const cat : Cat = useAppSelector((state: RootState)=>(state.cats.cat))
  const dispatch = useAppDispatch()
  // Handle next cat click
  const handleNext = () => {
    dispatch(getCat())
  }
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
          `url("https://cataas.com/cat/${cat.id}")`,
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

    <Box
      w={{
        base: 56,
        md: 64,
      }}
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mt={-10}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    ><Flex
    alignItems="center"
    justifyContent="space-between"
    py={2}
    px={3}
    bg="gray.200"
    _dark={{
      bg: "gray.700",
    }}
  >
    <Button 
    leftIcon={<FaStar/>}
      bg="yellow.300"
      fontSize="xs"
      fontWeight="bold"
      color="white"
      px={2}
      py={1}
      rounded="lg"
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
     Fav
    </Button>
    <Button 
    leftIcon={<FaHeart/>}
      bg="red.400"
      fontSize="xs"
      fontWeight="bold"
      color="white"
      px={2}
      py={1}
      rounded="lg"
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
     Like
    </Button>
    <Button 
    leftIcon={<FaForward/>}
      bg="gray.800"
      fontSize="xs"
      fontWeight="bold"
      color="white"
      px={2}
      py={1}
      rounded="lg"
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
      onClick={handleNext}
    >
     Next
    </Button>
  </Flex>
      <chakra.h3
        py={5}
        textAlign="center"
        fontWeight="bold"
        textTransform="uppercase"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        letterSpacing={1}
      >
        {cat.tags&& cat.tags.map((tag,index)=>(
          <Badge key={index} rounded="full" px="2" fontSize="0.8em" colorScheme="blue" letterSpacing={2}>
          {tag}
        </Badge>
        ))}
        {!cat.tags && 'no tags'}
      </chakra.h3>

      
    </Box>
  </Flex>
</Flex>
  )
}
