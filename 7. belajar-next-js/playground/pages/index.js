/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Container, Text } from "@chakra-ui/react";
import BoxMenu from "../components/BoxMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gilman's Playground</title>
        <meta name="description" content="My Projects Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="5xl">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
          align="center"
          my="6"
        >
          Playing With New Technologies
        </Text>
        <BoxMenu title="Simple PostgreSQL CRUD" link="/simple-postgresql" />
      </Container>
    </>
  );
}
