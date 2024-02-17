import { Button, ButtonGroup, Flex, HStack, Heading, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FaProjectDiagram } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
// ml="8"
//navbar, about, skills, projects, contact
    return(
        <HStack w={"100%"}  pos={"sticky"}
        zIndex={"1"}
        top={"0px"}
        left={"0px"}
       spacing={"25px"}
        >
        <Heading
        size="md" fontWeight='semibold' color="cyan.400"> chandan pandey</Heading>

      <Spacer></Spacer>
          <AnchorLink href="#home">
          <ButtonGroup>
          <IconButton  icon={<FcHome />} isRound='true'>  </IconButton>
          <button>Home</button>
          </ButtonGroup>
          
          </AnchorLink>
          <AnchorLink href="#about">
          <ButtonGroup>
          <IconButton  icon={<FcAbout />} isRound='true' >About</IconButton>
          <button>About</button>
          </ButtonGroup>
          </AnchorLink>
          <AnchorLink href="#contact">
          <ButtonGroup>
          <IconButton icon={<FcContacts />} isRound='true' >Contact</IconButton>
          <button>Contact</button>
          </ButtonGroup>
          </AnchorLink>
          <AnchorLink href="#project">
          <ButtonGroup>
          <IconButton icon={<FaProjectDiagram />} isRound='true'>Project</IconButton>
          <button>Project</button>
          </ButtonGroup>
          </AnchorLink>
          <AnchorLink href="#resume">
          <ButtonGroup>
          <IconButton icon={<RxResume />} isRound='true' >Resume</IconButton>
          <button>Resume</button>
          </ButtonGroup>
          </AnchorLink>
          <AnchorLink href="#skill">
          <ButtonGroup>
          <IconButton icon={<GiSkills/>} isRound='true' >Skill</IconButton>
          <button>Skill</button>
          </ButtonGroup>
          </AnchorLink>
          <AnchorLink href="#statics">
          <ButtonGroup>
          <IconButton icon={<GiSkills/>} isRound='true' >Statics</IconButton>
          <button>Statics</button>
          </ButtonGroup>
          </AnchorLink>
          <IconButton  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </HStack>
    )
}

export default Navbar;