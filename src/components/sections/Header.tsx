import { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  chakra,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Button,
  Link as ChakraLink,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Login from "../WIP/login/Login";
import { FaGithub, FaDiscord } from "react-icons/fa";

const Link = chakra(NavLink);

const links = [
  {
    id: 1,
    to: "/",
    label: "Assistir",
  },
  {
    id: 2,
    to: "/sobre",
    label: "Sobre",
  },
  {
    id: 3,
    to: "/contributors",
    label: "Comunidade",
  },
];

export default function Header() {
  const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef(null);

  return (
    <>
      <Flex p={4} borderBottomColor={"whiteAlpha.100"} borderBottomWidth={1} alignItems="center">
        <Link to="/">
          <HStack>
            <Image src="/logo.svg" alt="Br Dev Streamers" height={50} width={50} />
            <Box textAlign={"center"}>
              <Text className="logo-title">BR Dev Streamers</Text>
              <Text mt={-2} className="logo-subtitle">
                Unindo a comunidade de Live Coding
              </Text>
            </Box>
          </HStack>
        </Link>
        <Spacer />
        {isLargerThanLg && (
          <>
            <HStack gap={4}>
              {links.map((link) => (
                <Link
                  to={link.to}
                  key={link.id}
                  color={"gray.100"}
                  _activeLink={{
                    color: "primary.500",
                  }}
                  _hover={{ textDecoration: "underline" }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
            <Spacer />
            <HStack gap={4}>
              <ChakraLink
                fontSize={24}
                isExternal={true}
                href={"https://github.com/Br-Dev-Streamers"}
                color={"whiteAlpha.500"}
                _hover={{ textDecoration: "underline", color: "gray.100" }}
              >
                <FaGithub />
              </ChakraLink>
              <ChakraLink
                fontSize={24}
                isExternal={true}
                href={"https://discord.gg/collabcode"}
                color={"whiteAlpha.500"}
                _hover={{ textDecoration: "underline", color: "gray.100" }}
              >
                <FaDiscord />
              </ChakraLink>
              <Login />
            </HStack>
          </>
        )}

        {!isLargerThanLg && (
          <Button
            ref={buttonRef}
            size="xs"
            rounded="sm"
            bgColor="blackAlpha.500"
            color="gray.100"
            _hover={{
              filter: "brightness(0.9)",
            }}
            leftIcon={<HamburgerIcon />}
            onClick={onOpen}
          >
            Menu
          </Button>
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
        <DrawerOverlay />

        <DrawerContent bgColor="secondary.600" color="gray.100" px={4} pt={16}>
          <DrawerCloseButton />

          <VStack alignItems="start">
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.id}
                w="full"
                p={2}
                rounded="sm"
                color={"gray.100"}
                _activeLink={{
                  color: "primary.500",
                  bgColor: "blackAlpha.500",
                }}
                _hover={{ bgColor: "blackAlpha.500" }}
              >
                {link.label}
              </Link>
            ))}

            <ChakraLink
              isExternal={true}
              href={"https://github.com/Br-Dev-Streamers"}
              color={"gray.100"}
              w="full"
              p={2}
              rounded="sm"
              _hover={{ bgColor: "blackAlpha.500" }}
            >
              GitHub
            </ChakraLink>

            <ChakraLink
              isExternal={true}
              href={"https://discord.gg/collabcode"}
              p={2}
              w="full"
              rounded="sm"
              color={"gray.100"}
              _hover={{ bgColor: "blackAlpha.500" }}
            >
              Discord
            </ChakraLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
