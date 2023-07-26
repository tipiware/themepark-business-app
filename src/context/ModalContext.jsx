import { useCallback, createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext();

const ModalProvider = (props) => {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal();
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a UserProvider");
  }

  return context;
};

export { ModalProvider, useModal };