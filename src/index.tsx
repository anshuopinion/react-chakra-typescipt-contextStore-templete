import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import { StateProvider } from "store/StateProvider";
import reducer, { initialState } from "store/reducer";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
