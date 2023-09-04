import React from 'react';
import { useDataContext } from '../dataCon';
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import dayjs from "dayjs";

type DonationEntry = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  time: string;
};

const Donation = () => {
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Card withBorder shadow="xs" bg="gray.3">
      <Group mb={20}>
        <Title order={1} color="gray">
          Total
        </Title>
        <Title order={1} variant="gradient">
          {data.reduce((total: number, entry: DonationEntry) => total + entry.amount, 0)}
        </Title>
        <Title order={1} color="gray">
          THB
        </Title>
      </Group>
      <Stack>
        {data.map((entry: DonationEntry) => (
          <Paper key={entry.id} shadow="xs" p="md">
            <Group>
              <Text>{entry.firstName}</Text>
              <Text>{entry.lastName}</Text>
              <Text>{entry.email}</Text>
              <Text>{entry.amount}</Text>
              <Text>
                {dayjs(entry.time).format("D-MMM HH:mm:ss")}
              </Text>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
};

export default Donation;
