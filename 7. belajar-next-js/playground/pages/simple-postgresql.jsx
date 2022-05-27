import { Container, Text, Divider, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Head from "next/head";

import StickyNotes from "../components/simple-postgresql/StickyNotes";
import StickyNotesAdd from "../components/simple-postgresql/StickyNotesAdd";

const SimplePostgreSQL = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  console.log(todos);

  async function addNewTodo() {
    const newTodo = {
      title: "Untitled",
      description: "",
      tid: todos.at(-1).tid + 1,
    };
    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTodos([...todos, newTodo]);
  }

  async function deleteTodo(target) {
    try {
      const filteredTodos = todos.filter((todo) => todo.tid !== target);
      setTodos(filteredTodos);
      await fetch(`http://localhost:3001/todo/${target}`, {
        method: "Delete",
      }).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Simple PostgreSQL CRUD</title>
      </Head>
      <Container maxW="5xl">
        <Text
          bgGradient="linear(to-l, teal.200, teal.800)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
          align="center"
          my="6"
        >
          Simple PostgreSQL CRUD
        </Text>
        <Divider mb={6} borderColor="gray.200" />
        <SimpleGrid columns={4} spacing={5}>
          <>
            {todos.map((todo) => (
              <StickyNotes
                key={todo.tid}
                title={todo.title}
                desc={todo.description}
                id={todo.tid}
                deleteTodo={deleteTodo}
              />
            ))}
          </>
          <StickyNotesAdd addNewTodo={addNewTodo} />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default SimplePostgreSQL;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/todo");
  const initialTodos = await res.json();

  return {
    props: { initialTodos }, // will be passed to the page component as props
  };
}
