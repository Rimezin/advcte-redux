import React from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Logo from "../assets/Logo";

export default function Portal(props) {
  const { setToast, session, setSession, setModal } = props;

  // Profile //
  const [profileData, setProfileData] = React.useState({
    username: session.username,
    firstName: session.firstName,
    lastName: session.lastName,
  });

  function handleProfileData(event) {
    const { name, value, type, checked } = event.target;
    setProfileData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleProfileSubmit() {
    // e.preventDefault();
    setSession((session) => ({
      ...session,
      username: profileData.username,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
    }));
    setToast({
      show: true,
      title: "Profile Saved",
      message: `Your profile has successfully saved, ${session.firstName}`,
    });
    console.log(session);
  }

  function profileForm() {
    return (
      <Form onSubmit={handleProfileSubmit} noValidate validated={true}>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="dev"
            name="username"
            value={profileData.username}
            onChange={handleProfileData}
            aria-describedby="infoUsername"
            disabled
          />
          <Form.Text id="infoUsername" muted>
            Only the system administrator can configure this field.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="firstName" className="mb-3 ">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            name="firstName"
            value={profileData.firstName}
            onChange={handleProfileData}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastName" className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Smith"
            name="lastName"
            value={profileData.lastName}
            onChange={handleProfileData}
            required
          />
        </Form.Group>
      </Form>
    );
  }

  function handleProfileModal(e) {
    e.preventDefault();
    setModal({
      show: true,
      title: "Modal Title",
      content: profileForm(),
      okay: {
        action: () => {
          handleProfileSubmit();
        },
        title: "Save",
      },
      cancel: null,
      bodyClass: null,
    });
  }

  // Auto-show toast for darkMode //
  React.useEffect(() => {
    setToast({
      show: true,
      title: "Hello Portal",
      message: "Showing on portal page!",
    });
  }, [setToast]);

  return (
    <Container fluid className="px-0">
      {/* Header */}
      <Row className="mx-0">
        <Navbar
          key="navBar"
          bg="light"
          expand="md"
          className="mb-3 py-0 shadow"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Logo logoClass="logo-medium" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  {session.firstName}'s Advcte
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Admin</Nav.Link>
                </Nav>
                <NavDropdown
                  title={session.fullName()}
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <Button type="button" onClick={handleProfileModal}>
                    Profile
                  </Button>
                  <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Row>

      {/* Main Content Section */}
      <Row style={{ marginTop: "4.5rem" }}>
        <Col xs>col1</Col>
        <Col xs>col2</Col>
      </Row>

      {/* Footer */}
      <Row
        className="py-0 mx-0 p-fixed bottom-0 w-100"
        style={{ position: "fixed" }}
      >
        <Col sm="12" className="footer mx-0 px-0">
          <footer
            className={
              "d-flex flex-wrap justify-content-between align-items-center px-3 py-2 mx-0 shadow-top" +
              (session.darkMode
                ? " bg-dark text-white border-top-dark"
                : " bg-light border-top")
            }
          >
            <Col md="4" className="d-flex align-items-center no-select">
              <Button
                href="index.html"
                className={`mb-3 me-2 mb-md-0 text-decoration-none lh-1 no-select transition-25 hover-blue ${
                  session.darkMode ? "text-white" : "text-dark"
                }`}
                style={{
                  background: "none",
                  outline: "none",
                  border: "none",
                  fontSize: "18px",
                }}
              >
                <i className="bi-chat-dots-fill no-select"></i>
                <span className="p-2 transition-25 hover-blue">Messages</span>
              </Button>
            </Col>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex transition-25">
              <li className="ms-3">
                <a className="text-muted" href="index.html">
                  <i className="bi-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="index.html">
                  <i className="bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3 hover-blue">
                <a
                  className="text-muted"
                  href="https://github.com/Rimezin/advcte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi-github"></i>
                </a>
              </li>
              <li className="ms-3">
                <span className="text-muted">© 2022 Advcte</span>
              </li>
            </ul>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}
