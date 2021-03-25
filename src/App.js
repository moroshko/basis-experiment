import { Global, css } from "@emotion/react";
import "@fontsource/montserrat";
import "@fontsource/roboto";
import RequestLetter from "./RequestLetter";

export default function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <RequestLetter />
    </div>
  );
}
