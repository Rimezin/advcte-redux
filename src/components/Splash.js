import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { ShieldFillCheck, ShieldLock } from "react-bootstrap-icons";
import Birds from "../assets/Birds";
import Logo from "../assets/Logo";
import Waves from "../assets/Waves";
import About from "../pages/About";

export default function Splash(props) {
  const { session, setSession, setModal } = props;

  const [stage, setStage] = React.useState(1);
  const [validated, setValidated] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  // Handle About //
  function handleAbout() {
    setModal({
      show: true,
      title: "About Advcte",
      content: <About />,
      okay: {
        action: null,
        title: "Neat!",
      },
      cancel: null,
      bodyClass: "m-0 p-0",
    });
  }

  // Function called when field changed //
  function handleChange(event) {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  }

  // Function to handle what stage of login we're on //
  function handleStage() {
    setStage(2);
    setTimeout(() => {
      setSession((session) => ({
        ...session,
        loggedOn: true,
      }));
    }, 5000);
  }

  // Function called when submitted //
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    }

    // Change validation state to show that we tried.
    setValidated(true);

    // If both fields are filled, send to api //
    if (formData.password !== "" && formData.username !== "") {
      // Temporary Auth - Replace with real //
      if (formData.username === "dev" && formData.password === "dev") {
        setSession((session) => ({
          ...session,
          user: {
            username: formData.username,
            firstName: "John",
            lastName: "Smith",
            fullName: function () {
              return this.firstName + " " + this.lastName;
            },
          },
          experience: {
            darkMode: false,
          },
        }));
        setTimeout(() => {
          handleStage();
        }, 1000);
      } else {
        setModal({
          show: true,
          title: "Invalid Credentials",
          content: (
            <div>
              The information you entered was not correct. Please try again or
              contact your system adiminstrator.
            </div>
          ),
          okay: {
            action: null,
            title: "Okay",
          },
          cancel: null,
        });
        setValidated(false);
      }
    }
  }

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center bg-lightgray"
      style={{
        height: "100vh",
        zIndex: "60",
        minHeight: "100%",
        overflowY: "hidden",
      }}
    >
      <Row>
        <Col>
          <Logo logoClass="logo-large" />
        </Col>
      </Row>
      <Row
        className="w-100 bg-light rounded-3 border shadow p-3 rounded-3 text-center"
        style={{ height: "400px", maxWidth: "400px", zIndex: "61" }}
      >
        <div
          className={`fade ${stage === 1 ? "show" : "no-select no-pointer"}`}
          style={{ height: stage === 1 ? "100%" : "0%" }}
        >
          <Row className="d-flex pt-2 text-muted no-select align-items-center">
            <ShieldLock size="1.7rem" />
            <h4>Please sign in</h4>
          </Row>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              className="my-3"
              controlId="username"
              label="User Name"
            >
              <Form.Control
                type="text"
                className="rounded-3"
                onChange={handleChange}
                placeholder="username"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              className="my-3"
              controlId="password"
              label="Password"
            >
              <Form.Control
                type="password"
                className="rounded-3"
                onChange={handleChange}
                placeholder="password"
                required
              />
            </FloatingLabel>
            <div className="my-2 py-2 text-center">
              <Button
                type="submit"
                className="rounded-3"
                style={{ width: "80%" }}
              >
                Sign-in
              </Button>
            </div>
          </Form>
          <br />
          <Button
            variant="link"
            className="my-3 no-outline"
            onClick={handleAbout}
          >
            What is Advcte?
          </Button>
        </div>
        <div
          className={`d-flex flex-column justify-content-center fade transition align-items-center no-select no-pointer ${
            stage === 1 ? "" : "show"
          }`}
          style={{ height: stage === 2 ? "100%" : "0%" }}
        >
          <ShieldFillCheck color="#198754" size={130} className="my-4" />
          <h2 style={{ color: "#198754" }}>
            Welcome back, {session.user.firstName}!
          </h2>
          <small className="text-muted">Please wait, loading...</small>
        </div>
      </Row>
      <Birds session={session} />
      <Waves session={session} />
    </Container>
  );
}
