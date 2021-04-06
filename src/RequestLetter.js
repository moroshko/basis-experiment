/** @jsxImportSource @emotion/core */
import React from "react";
import { Header, Container, Text, Footer, Form, RadioGroup, Input, DatePicker, Button, Stack } from "basis";

const letterTypeOptions = [
    {
        label: "Credit limit decrease",
        value: "decrease",
    },
    {
        label: "Account Balance",
        value: "balance",
    },
    {
        label: "No activity letter",
        value: "no-activity",
    },
]

const initialValues = {
    type: '',
    name: '',
    dob: {
        day: '',
        month: '',
        year: '',
    },
}

export default function RequestLetter() {
  return (
      <>
      <Header>
        <Header.Logo name="latitude" />
      </Header>
          <Container bg="secondary.lightBlue.t15" padding="6 0">
              <Container hasBreakpointWidth>
              <Text
                  as="h1"
                  textStyle="heading4"
                  color="primary.blue.t100"
                  align="left"
              >Request a letter</Text>
              </Container>
          </Container>
          <Container padding="6 0" hasBreakpointWidth>
              <Container width="100%" width-sm="400">
              <Form initialValues={initialValues}>
                  <Stack gap="8">
                  <RadioGroup
                      name="type"
                      label="Letter type"
                      columns={1}
                      options={letterTypeOptions}
                  />
                  <Input name="name" label="Name" />
                  <DatePicker
                      name="dob"
                      label="Date of birth"
                  />
                  <Button type="submit">Request letter</Button>
                  </Stack>
              </Form>
              </Container>

          </Container>
          <Footer>
              <Footer.Header>
                  <Footer.Header.Logo name="latitude" />
                  <Footer.Header.Social>
                      <Footer.Header.Social.Facebook
                          href="https://www.facebook.com/latitudefinancialservices/"
                          title="Latitude Financial Facebook"
                      />
                      <Footer.Header.Social.LinkedIn
                          href="https://www.linkedin.com/company/latitude-financial-services/"
                          title="Latitude Financial LinkedIn"
                      />
                  </Footer.Header.Social>
              </Footer.Header>
          </Footer>
    </>
  );
}
