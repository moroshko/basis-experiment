/** @jsxImportSource @emotion/core */
import { Formik } from "formik";
import { DOBInput } from "./input/DOBInput";
import { RadioInput } from "./input/RadioInput";
import { TextInput } from "./input/TextInput";
import { MaxWidthContainer } from "./MaxWidthContainer";
import { Button } from "./Button";

const radioInput = [
  { name: "creditLimitDecrease", title: "Credit limit decrease" },
  { name: "accountBalance", title: "Account balance" },
  { name: "noActivityLetter", title: "No activity letter" },
];

export function Form() {
  return (
    <MaxWidthContainer>
      <Formik
        initialValues={{
          dob: { day: "", month: "", year: "", letterType: "", name: "" },
        }}
      >
        {(props) => {
          console.log(props);
          return (
            <form css={{ maxWidth: "300px" }}>
              <RadioInput
                checked={"noActivityLetter"}
                data={radioInput}
                heading="Letter type"
                onChange={() => {}}
              />
              <TextInput heading="Name" value={""} onChange={() => {}} />
              <DOBInput
                heading={"Date of birth"}
                dob={{ day: "", month: "", year: "" }}
              />
              <div css={{ margin: "25px 0 15px" }}>
                <Button text="Request letter" />
              </div>
            </form>
          );
        }}
      </Formik>
    </MaxWidthContainer>
  );
}
