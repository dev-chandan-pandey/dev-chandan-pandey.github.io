import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
// import Icon from "@chakra-ui/icon";

import { Icon } from "@chakra-ui/react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";
import { IconButton, Image } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
function Profile() {
  const array2 = [
    { text: "Netlify", icon: SiNetlify },
    { text: "Vscode", icon: TbBrandVscode },
    { text: "Github", icon: AiFillGithub },
    { text: "Postman", icon: SiPostman },
    { text: "Vercel", icon: TbBrandVercel }
  ];

  const array = [
    { text: "HTML", icon: AiOutlineHtml5 },
    { text: "CSS", icon: DiCss3 },
    { text: "Javascript", icon: IoLogoJavascript },
    { text: "React", icon: FaReact },
    { text: "Redux", icon: TbBrandRedux },
    { text: "Nextjs", icon: TbBrandNextjs },
    { text: "NodeJs", icon: FaNodeJs },
    { text: "Mongodb", icon: SiMongodb },
    { text: "Chakraui", icon: SiChakraui },
  ];
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
    id="project"
    // *.log for all file use *
    // dir/ fro all directory use /
    // for outer direcory /dir/
    // for specfic dir static/dir
    // border={"2px solid red"}
   
      direction={isNotSmallerScreen ? "row" : "column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      alignContent={"center"}
      w="85%"
      margin={"auto"}
      gap={"5"}
    >
      <Box
        // border={"2px solid blue"}
        alignSelf="center"
        px="8"
        py="8"
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Text fontWeight="bold" fontSize="2xl">
          My skills
        </Text>
        <Text fontSize="2xl" color="gray.400">
          My knowledge
        </Text>
        <SimpleGrid
          spacing={5}
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={8}
          columns={isNotSmallerScreen ? "3" : "2"}
        >
          {array.map((e,ind) => {
            return (
              <Flex
              key={ind}
                rounded={"xl"}
                direction={"column"}
                mt="4"
                bg="blue.400"
                w="22vh"
                justify={"flex-end"}
              >
                <Icon color="white" p="4" as={e.icon} w="24" h="24"></Icon>
                <Text
                  color="white"
                  p="4"
                  fontSize={"xl"}
                  fontWeight={"semibold"}
                >
                  {e.text}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>

      <Box
        // border={"2px solid blue"}
        // alignSelf="center"
        px="8"
        py="8"
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Text fontWeight="bold" fontSize="2xl">
          My Tools
        </Text>
        <Text fontSize="2xl" color="gray.400">
          working on ...
        </Text>
        <SimpleGrid
          spacing={5}
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={8}
          columns={isNotSmallerScreen ? "3" : "2"}
        >
          {array2.map((e) => {
            return (
              <Flex
                rounded={"xl"}
                direction={"column"}
                mt="4"
                bg="blue.400"
                w="22vh"
                justify={"flex-end"}
              >
                <Icon color="white" p="4" as={e.icon} w="24" h="24"></Icon>
                <Text
                  color="white"
                  p="4"
                  fontSize={"xl"}
                  fontWeight={"semibold"}
                >
                  {e.text}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Profile;
