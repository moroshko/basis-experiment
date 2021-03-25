import { Global, css } from "@emotion/core";
import RequestLetter from "./RequestLetter";
import "@fontsource/montserrat";
import "@fontsource/roboto";

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
