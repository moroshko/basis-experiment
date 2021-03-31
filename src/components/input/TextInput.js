/** @jsxImportSource @emotion/core */

import { InputHeading } from "./InputHeading";

export function TextInput({ placeholder, value, onChange, heading }) {
  return (
    <div>
      {heading && <InputHeading heading={heading} />}
      <input
        css={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          border: "none",
          padding: "12.5px 15px",
        }}
        value={value}
      />
    </div>
  );
}
