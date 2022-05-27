import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Flex, Textarea, Tooltip, Circle, Input } from "@chakra-ui/react";
import { useState } from "react";

const StickyNotes = ({ title, desc, id, deleteTodo }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);

  async function editTodo() {
    const editedTodo = {
      title: newTitle,
      description: newDesc,
    };
    await fetch(`http://localhost:3001/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedTodo),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("Edit Success & Saved to Database");
  }

  function handleDelete() {
    const yes = confirm("Are you sure wanna delete this?");
    if (yes) deleteTodo(id);
  }

  return (
    <Flex h="200px" direction="column" shadow="md" position="relative">
      <Tooltip label={newTitle} aria-label="A tooltip">
        <Input
          w="full"
          px="2"
          bg="blue.300"
          fontSize="md"
          justifyContent="flex-start"
          color="white"
          cursor="default"
          borderRadius="none"
          fontWeight="bold"
          border="none"
          _focus={{ border: "none" }}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </Tooltip>

      <Textarea
        px="2"
        py="1"
        color="gray.600"
        h="full"
        noOfLines={6}
        fontSize="sm"
        borderRadius="none"
        resize="none"
        _focus={{
          borderColor: "blue.300",
        }}
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <Circle
        size="30px"
        bg="gray.200"
        color="gray.700"
        opacity=".5"
        position="absolute"
        bottom="2"
        right="2"
        cursor="pointer"
        _hover={{ opacity: "1" }}
        onClick={editTodo}
      >
        <EditIcon />
      </Circle>

      <Circle
        size="30px"
        bg="gray.200"
        color="gray.700"
        opacity=".5"
        position="absolute"
        bottom="2"
        right="10"
        cursor="pointer"
        _hover={{ opacity: "1" }}
        onClick={handleDelete}
      >
        <DeleteIcon />
      </Circle>
    </Flex>
  );
};

export default StickyNotes;
