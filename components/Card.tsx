import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface CardProps {
  title: string;
  posloc: string;
  description: string;
  date: string;
}

export const Card = ({ title, description, posloc, date }: CardProps) => {
  return (
    <Center py={2} mx={4}>
      <Box
        minW={"445px"}
        maxW={"445px"}
        w={"full"}
        // bg={useColorModeValue("white", "gray.900")}
        bg={"brand.200"}
        // boxShadow={"2xl"}
        rounded={"35"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          // bg={"gray.100"}

          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"fill"}
          />
        </Box>
        <Stack>
          {/* <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
          </Text> */}
          <Heading
            // color={useColorModeValue("gray.700", "white")}
            color={"brand.400"}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}> */}
        {/* <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          /> */}
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text color={"brand.500"} fontWeight={600}>
            {posloc}
          </Text>
          <Text color={"brand.500"}>{date}</Text>
        </Stack>
        {/* </Stack> */}
        <Text mt={2} color={"brand.400"}>
          {description}
        </Text>
      </Box>
    </Center>
  );
};