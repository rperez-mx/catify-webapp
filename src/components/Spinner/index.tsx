import { Spinner as Spi} from '@chakra-ui/react'
import React from 'react'

export default function Spinner() {
  return (
    <Spi
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
  )
}
