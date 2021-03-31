/** @jsxImportSource @emotion/core */
import { MaxWidthContainer } from "./MaxWidthContainer";
import { ReactComponent as Logo } from "../icons/logo.svg";

export function Header() {
  return (
    <div css={{ padding: "10px 0" }}>
      <MaxWidthContainer>
        <Logo css={{ width: "170px" }} fill="rgb(0, 70, 170)" />
      </MaxWidthContainer>
    </div>
  );
}
