import React from "react";
import Portal from "./components/Portal";
import Splash from "./components/Splash";
import { Modal, Button, Toast, ToastContainer } from "react-bootstrap";
import Logo from "./assets/Logo";

export default function App() {
  // State for sesison //
  const [session, setSession] = React.useState({
    loggedOn: false,
    username: "",
    firstName: "",
    lastName: "",
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    darkMode: false,
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

  // Effect to run when toast is updated //
  React.useEffect(() => {
    if (toast.show === true) {
      // Auto close //
      setTimeout(() => {
        setToast((toast) => ({
          ...toast,
          show: false,
        }));
      }, 8000);
    }
  }, [toast]);

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
    bodyClass: null,
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
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modal.bodyClass}>{modal.content}</Modal.Body>
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
        <ToastContainer
          className="p-3"
          position="top-end"
          style={{ zIndex: "1031" }}
        >
          <Toast show={toast.show} onClose={closeToast}>
            <Toast.Header>
              <Logo logoClass="logo-letter" style={{ paddingRight: "5px" }} />
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
      {session.loggedOn && (
        <Portal
          setToast={setToast}
          session={session}
          setSession={setSession}
          setModal={setModal}
        />
      )}
    </div>
  );
}
