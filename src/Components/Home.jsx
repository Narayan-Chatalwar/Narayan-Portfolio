import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import styles from "./Home.module.css";
import Projects from "./Projects";
import blob1 from "../Atributes/blobanimation.svg";
import Footer from "./Footer";
import githublogo from "../Atributes/githubicon.svg";
import linkedinlogo2 from "../Atributes/linkedinlogo2.svg";
import narayanchatalwar from "../Atributes/narayanchatalwar.jpg";
import { Box, Flex, Image } from "@chakra-ui/react";
import MoonLoader from "react-spinners/MoonLoader";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box id="home" marginTop="100px">
        <Box
          display={{ base: "column", md: "column", lg: "flex" }}
          justifyContent="space-between"
          width="80%"
          margin="auto"
        >
          <Box>
            <h1 className={styles.nameheading}>Hi 👋,</h1>
            <h1 className={styles.nameheading}>
              I'am <span style={{ color: "royalblue" }}>Narayan</span>
            </h1>
            <h1 className={styles.nameheading}>MERN Developer</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
                gap: "20px",
              }}
            >
              <a href="https://github.com/Narayan-Chatalwar" target="_blank">
                <img src={githublogo} alt="" width="40px" />
              </a>
              <a
                href="https://linkedin.com/in/narayan-chatalwar-09905121a"
                target="_blank"
              >
                <img src={linkedinlogo2} alt="" width="40px" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1sSM8PgUJaRW1KcvQ4GhI2vZR6I1ro76n/view?usp=sharing"
              >
                <button className={styles.buttonresume}>Resume</button>
              </a>
            </div>
          </Box>

          <Box
            justifyContent="center"
            alignItems="center"
            position="relative"
            display={{ base: "none", md: "none", lg: "inline-flex" }}
          >
            <Image
              src={blob1}
              htmlWidth="600px"
              alt=""
              zIndex="2"
              position="relative"
              left="320px"
            />
            
            <Image
              src={narayanchatalwar}
              alt=""
              htmlWidth="400px"
              htmlHeight="250px"
              position="relative"
              left="-150px"
             border="5px solid pink"
              borderRadius="50%"
              height="400px"
              zIndex="5"
            />
          </Box>
        </Box>
      </Box>

      <About />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
