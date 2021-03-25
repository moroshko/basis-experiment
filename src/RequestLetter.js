/** @jsxImportSource @emotion/core */
import { Container, Text, Header } from "basis";

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
    </>
  );
}
