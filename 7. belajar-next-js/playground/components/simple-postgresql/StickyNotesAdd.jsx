import { AddIcon } from "@chakra-ui/icons";
import { Box, Circle, AspectRatio } from "@chakra-ui/react";

const StickyNotesAdd = ({ addNewTodo }) => {
  return (
    <AspectRatio>
      <Box
        w="150px"
        h="32"
        border="1px"
        borderColor="gray.300"
        bg="gray.200"
        display="flex"
        opacity=".5"
        cursor="pointer"
        _hover={{ opacity: ".8" }}
        transitionTimingFunction="ease-in"
        transitionDuration="100ms"
        onClick={addNewTodo}
      >
        <Circle size="40px" bg="gray.400" color="white" m="auto">
          <AddIcon />
        </Circle>
      </Box>
    </AspectRatio>
  );
};

export default StickyNotesAdd;
