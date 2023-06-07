import React from "react";
import styles from "./style.module.scss";
import Modal from "react-modal";

export default function Button() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles["button-container"]}>
      <button className={styles.button} type="button" onClick={openModal}>
        Save
      </button>
      <div>
        <Modal
          appElement={document.getElementById("root") || undefined}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "black",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 0,
            },
          }}
          contentLabel="Modal"
        >
          <p ref={(_subtitle) => (subtitle = _subtitle)}>Employee Created</p>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  );
}
