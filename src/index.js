import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const TestModal = ({ context, id, innerProps } : {modalBody}) => (
//   <>
//     <Text size="sm">{innerProps.modalBody}</Text>
//     <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
//       Close modal
//     </Button>
//   </>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
