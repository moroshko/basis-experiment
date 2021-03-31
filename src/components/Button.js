/** @jsxImportSource @emotion/core */

export function Button({ text, onClick, disabled }) {
  return (
    <button
      css={{
        width: "190px",
        backgroundColor: "rgb(0,70,170);",
        color: "white",
        border: "none",
        padding: "12px 0",
        borderRadius: "4px",
      }}
      {...{ onClick, disabled }}
    >
      {text}
    </button>
  );
}
