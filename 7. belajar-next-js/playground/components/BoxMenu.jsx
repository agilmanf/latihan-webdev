import NextLink from "next/link";
import { Box, AspectRatio } from "@chakra-ui/react";

const BoxMenu = ({ title, link }) => {
  return (
    <AspectRatio ratio={1} maxW="200">
      <NextLink href={link}>
        <Box
          bg="teal.300"
          _hover={{ bg: "teal.200" }}
          color="white"
          fontSize="20"
          padding={5}
          align="center"
          cursor="pointer"
        >
          {title}
        </Box>
      </NextLink>
    </AspectRatio>
  );
};

export default BoxMenu;
