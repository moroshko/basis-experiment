/** @jsxImportSource @emotion/core */
import { MaxWidthContainer } from "./MaxWidthContainer";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as FacebookIcon } from "../icons/facebook.svg";

export function Footer() {
  return (
    <footer css={{ backgroundColor: "rgb(0, 70, 170)", padding: "10px 0" }}>
      <MaxWidthContainer>
        <div css={{ display: "flex", justifyContent: "space-between" }}>
          <Logo css={{ width: "170px" }} fill="white" />
          <div
            css={{
              display: "flex",
              alignItems: "center",
              "@media (max-width: 600px)": {
                display: "block",
              },
            }}
          >
            <p css={{ marginRight: "16px", color: "white" }}>Connect with us</p>
            <div>
              <FacebookIcon fill="white" />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
