import { Global, css } from "@emotion/core";
import { BasisProvider, defaultTheme } from "basis";
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
          body {
            margin: 0;
          }
        `}
      />
        <BasisProvider theme={defaultTheme}>
            <RequestLetter />
        </BasisProvider>
    </div>
  );
}
