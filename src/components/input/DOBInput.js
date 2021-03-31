/** @jsxImportSource @emotion/core */
import { InputHeading } from "./InputHeading";
import { TextInput } from "./TextInput";

export function DOBInput({ dob: { day, month, year }, onChange, heading }) {
  return (
    <div>
      <InputHeading heading={heading} />
      <div css={{ display: "flex;" }}>
        <div css={{ flex: "0 0 50px", marginRight: "8px" }}>
          <TextInput value={day} />
        </div>
        <div css={{ flex: "0 0 50px", marginRight: "8px" }}>
          <TextInput value={month} />
        </div>
        <div css={{ flex: "0 0 auto" }}>
          <TextInput value={year} />
        </div>
      </div>
    </div>
  );
}
