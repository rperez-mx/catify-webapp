import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { user } from '../../app/features/user/userSlice'

export default function Navbar() {
  // Get user data from state 
  const userState = useAppSelector((state: RootState)=>(state.user))
  const user : user = userState.user
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  // Handle lougout
  const handleLogout = () => {
    alert('Estas saliendo')
    onClose()
  }
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex flexDirection={'row'} alignItems="center" justifyContent="space-between">
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            ></chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              {import.meta.env.VITE_APP_TITLE}
            </chakra.h1>
            {userState.logged && <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                marginLeft={5}>
                {user && <Avatar
                  size={'sm'}
                  src={
                    user&& user.picture
                  }
                />}
              </MenuButton>
              <MenuList>
                <MenuItem>Favs</MenuItem>
                <MenuItem>Liked</MenuItem>
                <MenuDivider />
                <MenuItem onClick={onOpen}>Cerrar sesi&oacute;n</MenuItem>
              </MenuList>
            </Menu>}
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {/* Right side of the navbar */}
              <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            </HStack>

            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                w='full'
              >
                <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
