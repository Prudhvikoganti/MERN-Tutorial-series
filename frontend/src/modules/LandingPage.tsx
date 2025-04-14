import React from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="into-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One safe place for all your notes</p>
            </div>
            <div className="buttoncontainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
