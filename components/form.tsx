import React, { useEffect, useState } from 'react';
import { API_URL } from "@/utils/api";
import { Input, Button, Title, Stack } from "@mantine/core";
import { Card } from "@mantine/core";
import { useDataContext } from '../dataCon';

const Form: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable
  const { fetchData } = useDataContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstNameInput = event.currentTarget.firstName;
    const lastNameInput = event.currentTarget.lastName;
    const emailInput = event.currentTarget.email;
    const donationAmountInput = event.currentTarget.donationAmount;

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const donationAmount = donationAmountInput.value;

    fetchData();

    if (!firstName || !lastName || !email || !donationAmount) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!donationAmount || isNaN(Number(donationAmount)) || Number(donationAmount) <= 1000) {
      alert("Please enter a valid donation amount or greater than 1000.");
      return;
    }

    // Clear the form fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    donationAmountInput.value = '';

    // Set the isSubmitted state to true
    setIsSubmitted(true);
  };

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>
      <form onSubmit={handleSubmit}>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input name="firstName" />
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input name="lastName" />
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input name="email" />
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input name="donationAmount" />
          </Input.Wrapper>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>

      {isSubmitted && (
        <div>
          Thank you for your donation!.
        </div>
      )}
    </Card>
  );
};

export default Form;