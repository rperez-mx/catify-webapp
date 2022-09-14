import {
  Badge,
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Modal,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";
import { Cat, getCat } from "../../app/features/cats/catSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { FaHeart, FaStar, FaForward, FaFacebook, FaShare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoPricetag } from "react-icons/io5";
import { setUser, user, UserInfo } from "../../app/features/user/userSlice";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../app/firebase/config";

export default function Card() {
  const cat: Cat = useAppSelector((state: RootState) => state.cats.cat);
  const isLogged: boolean = useAppSelector(
    (state: RootState) => state.user.logged
  );
  const user: user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Handle next cat click
  const handleNext = () => {
    dispatch(getCat());
  };
  // Handle Facebook Login
  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        onClose();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        onClose();
        // ...
      });
  };
  // Google Login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        let rawData : UserInfo = result.user as UserInfo;
        let user: user = {} as user;
        user.id = rawData.uid;
        user.name = rawData.displayName;
        user.picture = rawData.photoURL;
        dispatch(setUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLogged", "true");
        onClose();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        onClose();
      });
  };
  // Handle Like click
  const handleLike = () => {
    if (!isLogged) {
      onOpen();
    }
  }
  // Handle share
    const handleShare = async () => {
      const newFile = await fetch(import.meta.env.VITE_API_URL_CUSTOM+cat.picture).then(r=>r.blob())
      const data = {
        files: [
          new File([newFile], 'image.png', {
            type: newFile.type,
          }),
        ],
        title: 'Mira gatitos bonitoooos ✨',
        text: `Mira un gatito bonitoooo 💖\nMira más gatitos en -> https://mishigram.web.app ✨`,
      };
  
      try {
        await navigator.share(data);
     } catch (err) {
       console.error(err);
     }
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
          w={{ base: "calc(75vw)", lg: "calc(50vw)" }}
          h={{ base: "calc(50vh)", lg: "calc(60vh)" }}
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage: `url("https://cataas.com/cat/${cat.id}")`,
          }}
        >
          <chakra.span
            // pos="relative"
            marginTop={"20px"}
            px={2}
            py={1}
            fontSize={{ base: "sm", lg: "md" }}
            fontWeight="bold"
            lineHeight="none"
            color="red.100"
            // transform={{base: "translate(-250%,50%)",sm: "translate(-350%,50%)", md: "translate(-530%,50%)",lg: "translate(-430%, 100%)", xl:"translate(-790%, 100%)"}}
            bg={{ base: "red.600" }}
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
          mt={{ base: "-4em", lg: "-4em" }}
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
              onClick={handleLike}
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
              onClick={handleShare}
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
              onClick={handleNext}
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
            {cat.tags &&
              cat.tags.map((tag, index) => (
                <Tag
                  size={"sm"}
                  key={index}
                  variant="solid"
                  colorScheme="orange"
                  marginLeft={2}
                >
                  <TagLeftIcon boxSize="12px" as={IoPricetag} />
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            {!cat.tags && "no tags"}
          </chakra.h3>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody p={10}>
              Para dar like es necesario iniciar sesi&oacute;n
            </ModalBody>

            <ModalFooter px={25} flexDirection={"column"}>
              {/* <Button
                w={"full"}
                colorScheme={"facebook"}
                leftIcon={<FaFacebook />}
                onClick={facebookLogin}
                marginBottom={5}
              >
                <Center>
                  <Text>Continue with Facebook</Text>
                </Center>
              </Button> */}
              <Button
                w={"full"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
                onClick={googleLogin}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
