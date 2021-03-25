import { BasisProvider, defaultTheme } from "basis";
import RequestLetter from "./RequestLetter";
import "@fontsource/montserrat";
import "@fontsource/roboto";

export default function App() {
  return (
    <div>
      <BasisProvider theme={defaultTheme}>
        <RequestLetter />
      </BasisProvider>
    </div>
  );
}
