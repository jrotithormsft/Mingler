import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router";

const Home = () => {
  return (
    <div
      id="home"
      style={{ marginTop: "15vh", width: "70vw", textAlign: "center" }}
    >
      <div id="homeContent" style={{ marginLeft: "8vw" }}>
        <h2> Welcome to Mingler! </h2>
        <h4 style={{ color: "12b38d", marginTop: "2%" }}>
          Sharing is how we grow
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "4vh",
          marginLeft: "5vw",
          width: "100%"
        }}
      >
        <Card style={{ margin: "5vh", width: "35vw" }}>
          <Card.Img
            variant="top"
            src="https://mspoweruser.com/wp-content/uploads/2016/11/MSFT-Pride-Parade.jpg"
          />
          <Card.Body>
            <Card.Title>What We Do</Card.Title>
            <Card.Text>
              Whether you are new to the city or new to Microsoft, Mingler is
              the go-to app for you! Get help from colleagues and make new
              friends. Can’t find a category to post your query? Send it in
              Random!
            </Card.Text>
            <Button className="app-color">Start Exploring</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: "5vh", width: "35vw" }}>
          <Card.Body>
            <Card.Title>Need Help?</Card.Title>
            <Card.Text>
              <Form style={{ marginTop: "10%", textAlign: "left" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="message"
                    placeholder="Let us know how we can help!"
                  />
                </Form.Group>
              </Form>
              <Button style={{ marginTop: "15%" }} className="app-color">
                Submit
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Home);
