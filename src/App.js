import { Global, css } from "@emotion/core";
import RequestLetter from "./RequestLetter";
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <div>
      <Global
        styles={css`
          body,
          html {
            margin: 0;
            padding: 0;
            font-family: montserrat;
          }
          *,
          *::before,
          *:after {
            box-sizing: border-box;
          }
        `}
      />
      <RequestLetter />
    </div>
  );
}
