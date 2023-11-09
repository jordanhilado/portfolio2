import { Box, Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Link } from "react-scroll";

export const NavBar: React.FC = ({}) => {
  const [mobile] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      {mobile ? (
        <Box>
          <Flex
            zIndex={1}
            position="fixed"
            width="100%"
            top={0}
            p={4}
            bg="brand.100"
            flexDirection="column"
            alignItems="center"
          >
            <Flex width="fit-content" mb={4}>
              <NextLink href="/">
                <a>
                  <Heading size="2xl" color="brand.400">
                    Jordan Hilado
                  </Heading>
                </a>
              </NextLink>
            </Flex>
            <Flex width="550px" justifyContent="space-between">
              <Link to="skills" spy={true} smooth={true} duration={1000}>
                <Button colorScheme="teal" size="md">
                  Skills
                </Button>
              </Link>
              <Link to="experience" spy={true} smooth={true} duration={1000}>
                <Button colorScheme="teal" size="md">
                  Experience
                </Button>
              </Link>
              <Link to="education" spy={true} smooth={true} duration={1000}>
                <Button colorScheme="teal" size="md">
                  Education
                </Button>
              </Link>
              <Link to="projects" spy={true} smooth={true} duration={1000}>
                <Button colorScheme="teal" size="md">
                  Projects
                </Button>
              </Link>
              <a
                href="https://nbviewer.org/github/jordanhilado/portfolio-website/blob/main/data/resume/Jordan_Ali_Hilado_2023.pdf?flush_cache=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="teal" size="md" variant="outline">
                  Résumé
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Flex
            zIndex={1}
            position="fixed"
            width="100%"
            top={0}
            p={4}
            bg="brand.100"
            flexDirection="column"
            alignItems="center"
          >
            <Flex width="fit-content" mb={4}>
              <NextLink href="/">
                <a>
                  <Heading size="2xl" color="brand.400">
                    Jordan Hilado
                  </Heading>
                </a>
              </NextLink>
            </Flex>
            <Flex
              width="450px"
              height="110px"
              flexWrap="wrap"
              justifyContent="space-around"
            >
              <Link
                offset={-70}
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Button colorScheme="teal" size="md">
                  Skills
                </Button>
              </Link>
              <Link
                offset={-70}
                to="education"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Button colorScheme="teal" size="md">
                  Education
                </Button>
              </Link>
              <Link
                offset={-70}
                to="experience"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Button colorScheme="teal" size="md">
                  Experience
                </Button>
              </Link>
              <Link
                offset={-70}
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Button colorScheme="teal" size="md">
                  Projects
                </Button>
              </Link>
              <a
                href="https://tinyurl.com/hiladojordan2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="teal" size="md" variant="outline">
                  Résumé
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
