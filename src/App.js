import React from "react";
import Portal from "./components/Portal";
import Splash from "./components/Splash";
import { Modal, Button, Toast, ToastContainer } from "react-bootstrap";
import { PatchExclamationFill } from "react-bootstrap-icons";

export default function App() {
  // State for sesison //
  const [session, setSession] = React.useState({
    loggedOn: false,
    user: {
      username: null,
      firstName: null,
      lastName: null,
    },
    experience: {
      darkMode: false,
    },
  });

  // Toast State & Function //
  const [toast, setToast] = React.useState({
    show: false,
    title: "Notice",
    message: "This is a toast message.",
  });

  const closeToast = () =>
    setToast((toast) => ({
      ...toast,
      show: false,
    }));

  // Modal State & Function //
  const [modal, setModal] = React.useState({
    show: false,
    title: "Modal Title",
    content: <div>Modal Content</div>,
    okay: {
      action: () => {
        alert("default okay action");
      },
      title: "Okay",
    },
    cancel: null,
  });

  const modalClose = () =>
    setModal((modal) => ({
      ...modal,
      show: false,
    }));

  return (
    <div id="advcte">
      {/* Modal */}
      <Modal
        show={modal.show}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.content}</Modal.Body>
        <Modal.Footer>
          {modal.close && (
            <Button variant="secondary" onClick={modalClose}>
              {modal.close}
            </Button>
          )}
          <Button
            variant="primary"
            onClick={
              modal.okay.action !== null ? modal.okay.action : modalClose
            }
          >
            {modal.okay.title}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast */}
      <div aria-live="polite" aria-atomic="true">
        <ToastContainer className="p-3" position="top-end">
          <Toast show={toast.show} onClose={closeToast}>
            <Toast.Header>
              <PatchExclamationFill size={20} />
              <strong className="me-auto">{toast.title}</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{toast.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

      {!session.loggedOn && (
        <Splash session={session} setSession={setSession} setModal={setModal} />
      )}
      {session.loggedOn && <Portal setToast={setToast} />}
    </div>
  );
}
