import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import About from "./components/About";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "./components/navbar";

// import Project from "./components/Project";
// import Contact from "./components/Contact";
import "./App.css";
// import { useEffect, useState } from "react";
import Statics from "./components/Statics";
function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";
     
  // function useFatch(url){
  //   const [isError,setError]= useState(false);
  //   const [isLoading,setLoading]= useState(false);
  //   const [data,setData]= useState([]);
  //     async function fetchData(){
  //         try{
  //            setLoading((e)=>!e)
  //           let res = await fetch(url);
  //           let   data = await res.json();
  //           setData(data)
  //           setLoading((e)=>!e)
  //         } catch(err){
  //           setLoading((e)=>!e)
  //           console.log(err)
  //           setError(true);
  //         }
  //      }
  //     useEffect(()=>{
  //      fetchData(url)
  //     },[data]);

  //   return[isLoading,isError,data]
  // }

  return (
    <VStack p={5}>
      <Navbar />
      <Header></Header>
      <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
        About Me
      </Heading>
      <About />
      <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
      Skills and Tools
    </Heading>
      <Profile/>
      
      <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
      Contacts
      </Heading>
      
      <Social></Social>
      <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
      Statistics
      </Heading>
      <Statics/>

    </VStack>
  );
}

export default App;
