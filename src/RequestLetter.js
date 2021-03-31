/** @jsxImportSource @emotion/core */
import {
  Container,
  Text,
  Header,
  DatePicker,
  Footer,
  Stack,
  Form,
  Input,
  RadioGroup,
  Button,
} from "basis";

const letterTypeOptions = [
  {
    label: "Credit limit decrease",
    value: "Credit limit decrease",
  },
  {
    label: "Account balance",
    value: "Account balance",
  },
  {
    label: "No activity letter",
    value: "No activity letter",
  },
];

const initialValues = {
  letterType: "",
  name: "",
  dateOfBirth: {
    day: "",
    month: "",
    year: "",
  },
};

export default function RequestLetter() {
  return (
    <>
      <Header>
        <Header.Logo name="latitude" />
      </Header>
      <Container bg="secondary.lightBlue.t15">
        <Container hasBreakpointWidth padding="8 0">
          <Text as="h1" textStyle="heading4" color="primary.blue.t100">
            Request a letter
          </Text>
        </Container>
      </Container>
      <Container hasBreakpointWidth padding="8 0">
        <Form initialValues={initialValues}>
          <Stack gap="8" width="100%" width-xs="300">
            <RadioGroup
              name="letterType"
              label="Letter type"
              columns={1}
              options={letterTypeOptions}
            />
            <Input name="name" label="Name" />
            <DatePicker name="dateOfBirth" label="Date of birth" />
            <Button type="submit" width="100%" width-xs="200">
              Request letter
            </Button>
          </Stack>
        </Form>
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
