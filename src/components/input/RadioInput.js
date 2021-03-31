/** @jsxImportSource @emotion/core */
import { InputHeading } from "./InputHeading";
function RadioInputElement({ checked, title, onChange, name }) {
  return (
    <div
      css={{
        backgroundColor: "#F5F5F5",
        padding: "10px 15px",
        margin: "4px 0",
      }}
      tabIndex={1}
    >
      <input type="radio" {...{ checked, onChange, name }} tabIndex={-1} />
      <span css={{ marginLeft: "15px" }}>{title}</span>
    </div>
  );
}

export function RadioInput({ data, onChange, heading, checked }) {
  return (
    <div>
      <InputHeading heading={heading} />
      {data.map((item) => (
        <RadioInputElement
          key={item.name}
          checked={item.name === checked}
          title={item.title}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
