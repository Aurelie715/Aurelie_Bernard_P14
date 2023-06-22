import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

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
