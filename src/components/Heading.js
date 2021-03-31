/** @jsxImportSource @emotion/core */

import { MaxWidthContainer } from "./MaxWidthContainer";

export function Heading() {
  return (
    <div css={{ backgroundColor: "rgb(232, 244, 255)" }}>
      <MaxWidthContainer>
        <h1 css={{ padding: "20px 0", color: "rgb(0, 70, 170)", margin: 0 }}>
          Request a letter
        </h1>
      </MaxWidthContainer>
    </div>
  );
}
