"use client";
import Donation from "../components/donation";
import Form from "../components/form";
import Name from "../components/name";
import { Container, Stack } from "@mantine/core";
import { DataProvider } from '../dataCon';
export default function Home() {
  return (
    <DataProvider>
    <Container size="sm" mt={"sm"}>
      <Stack spacing={"xl"}>
        <Name />
        <Form />
        <Donation />
      </Stack>
    </Container>
    </DataProvider>
  );
}
