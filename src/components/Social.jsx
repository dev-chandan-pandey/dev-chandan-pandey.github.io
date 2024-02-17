
import { Icon } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";

function Social() {
  return (
    <HStack spacing="24">
      <Link href="3">
        <IconButton ml={2} icon={<FaFacebookF />} isRound="true"></IconButton>
      </Link>
      <Link href="#">
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
      </Link>
      <Link href="#">
        <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
      </Link>
      <Link href="#">
        <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
      </Link>
    </HStack>
  );
}

export default Social;
