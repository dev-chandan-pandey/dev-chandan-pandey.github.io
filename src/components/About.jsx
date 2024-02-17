import { Box, Flex, Heading, Icon, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

function About() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
    id="about"
      direction={isNotSmallerScreen ? "row" : "column"}
      w="80%"
      margin={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
     gap={5}
    >
      <Image
        alignSelf="center"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        borderRadius="full"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="300px"
        // src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
        src="https://avatars.githubusercontent.com/u/77069375?s=400&u=6aeb8ece873ec17f51febe73b7ad4b572bc2518b&v=4"
      />
    
      <Box width={"100%"}  alignSelf="center" px="16" py="8">
        <Text fontSize="2xl" color="gray.400">
          Know about me
        </Text>

        <Text  fontWeight="bold" fontSize="2xl">
          Self-motivated, hard-working, and ambitious Full Stack Web Developer
          from Masai School with proficiency in javascript and React.
          Experienced at creating apps in collaborative as well as individual
          capacities with MERN stack and various web technologies including
          HTML, CSS, Javascript, React, and Redux. Looking for job opportunities
          in a technology-driven organization that helps to enhance career as
          well as knowledge.
        </Text>
        <Text fontSize="2xl" color="gray.400">
          Some of my other interests
        </Text>
        <Stack>
        <Text color="white"  fontSize="xl" fontWeight="semibold">
        Gym
        </Text>
        <Text color="white"  fontSize="xl" fontWeight="semibold">
        Traveling
        </Text>
        </Stack>
       
      </Box>
    </Flex>
  );
}

export default About;
