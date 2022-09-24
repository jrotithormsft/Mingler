import React, { Component } from "react";
import { withRouter } from "react-router";
import { Card, Button, Form, Modal } from "react-bootstrap";

class Apartments extends Component {
  state = {
    replies: [
      {
        name: "Jon Smith",
        date: "9/21/2022",
        time: "5:32pm",
        message:
          "Since the office is in Atlantic Station, you have a lot of options in Atlantic Station or Midtown. Depends on your budget"
      },
      {
        name: "Mike Brown",
        date: "9/21/2022",
        time: "7:55pm",
        message: "I was looking for a 1 bed on the cheaper side"
      },
      {
        name: "Natasha Khan",
        date: "9/22/2022",
        time: "12:12pm",
        message:
          "Atlantic Station is definitely cheaper than Midtown. Mostly poeple live in Steelworks and Ellington"
      },
      {
        name: "Rahul Kapoor",
        date: "9/22/2022",
        time: "3:05pm",
        message: "Spectrum on Spring in Midtown is not bad too"
      }
    ],
    show: false,
    textVal: "",
    apts: [
      {
        img: "/ellington.png",
        rent: "$1,763 - $3,268",
        bed: "1 - 2 bed",
        sqft: "650 - 1,486 sq ft",
        address: "391 17th St NW, Atlanta, GA 30363"
      },
      {
        img: "/17thStLofts.png",
        rent: "$2,425 - $3,747",
        bed: "2 - 3 bed",
        sqft: "1,139 - 2,238 sq ft",
        address: "230 18th St NW, Atlanta, GA 30363"
      },
      {
        img: "/steelworks.png",
        rent: "$1,783 - $3,340",
        bed: "1 - 3 bed",
        sqft: "638 - 1,482 sq ft",
        address: "1220 Mecaslin St NW, Atlanta, GA 30318"
      },
      {
        img: "/icon.png",
        rent: "$1,752 - $3,890",
        bed: "Studio - 2 bed",
        sqft: "601 - 1,132 sq ft",
        address: "22 14th St NW, Atlanta, GA 30309"
      }
    ],
    textVal2: "",
    post2: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    var newRep = {
      name: "Jaydeep Rotithor",
      date: "9/23/2022",
      time: "5:36 pm",
      message: form.reply.value
    };
    var { replies } = this.state;
    replies.push(newRep);
    this.setState({ replies, textVal: "" });
  };

  handleAddPost = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    var { post2 } = this.state;
    console.log(form.reply.value);
    var newRep = {
      name: "Jaydeep Rotithor",
      date: "9/23/2022",
      time: "6:06 pm",
      message: form.reply.value
    };
    post2.push(newRep);
    this.setState({ post2, textVal2: "" });
    this.handleClose();
  };

  handleOnPost = (event) => {
    event.preventDefault();
    this.setState({ textVal2: event.target.value });
  };

  handleOnRep = (event) => {
    event.preventDefault();
    this.setState({ textVal: event.target.value });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    var { replies, textVal, apts, show, textVal2, post2 } = this.state;
    return (
      <div style={{ marginTop: "2%" }}>
        <Button
          style={{ float: "right", marginRight: "3%" }}
          className="app-color"
          onClick={this.handleShow}
        >
          Create New Post
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "fit-content",
            marginTop: "3%"
          }}
        >
          <Card
            style={{
              marginLeft: "3%",
              width: "50%",
              textAlign: "left"
            }}
          >
            <Card.Body style={{ paddingBottom: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title style={{ fontWeight: "600" }}>
                  Mike Brown
                </Card.Title>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>9/21/2022</div>
                  <div>8:37 am</div>
                </div>
              </div>
              <div>
                Hey everyone! I'm new to Atlanta and I'm trying to find places
                close to the office. Any suggestions? I've heard the areas
                around the office are safe and there are public transport
                options.
              </div>
              <hr />
              <Card.Text style={{ height: "30vh", overflowY: "scroll" }}>
                {replies.map((rep) => (
                  <div
                    style={{
                      fontSize: "14px"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{ fontWeight: "550" }}>{rep.name}</div>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "10px" }}>{rep.date}</div>
                        <div>{rep.time}</div>
                      </div>
                    </div>
                    <div>{rep.message}</div>
                    <hr />
                  </div>
                ))}
              </Card.Text>
              <Form
                style={{
                  textAlign: "left",
                  display: "flex",
                  marginTop: "2vw"
                }}
                onSubmit={this.handleSubmit}
              >
                <Form.Group
                  className="mb-3"
                  controlId="reply"
                  style={{ display: "flex" }}
                >
                  <Form.Control
                    type="textarea"
                    placeholder="Enter your reply here"
                    style={{ marginRight: "1vw", width: "30vw" }}
                    value={textVal}
                    onChange={this.handleOnRep}
                  />
                </Form.Group>
                <Button
                  style={{ width: "10vw", height: "4vh" }}
                  type="submit"
                  className="app-color"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card
            style={{
              marginRight: "3%",
              width: "41%",
              fontWeight: "500"
            }}
          >
            <Card.Title
              style={{
                marginTop: "2%",
                marginBottom: "4%",
                fontWeight: "700"
              }}
            >
              Top Apartments near Microsoft
            </Card.Title>
            <Card.Body style={{ height: "35vh", overflowY: "scroll" }}>
              {apts.map((a) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingBottom: "4vh"
                  }}
                >
                  <hr />
                  <div>
                    <Card.Text>
                      <div>
                        <Card.Img
                          style={{
                            paddingLeft: "0",
                            height: "10vh",
                            width: "12vw"
                          }}
                          src={a.img}
                        />
                      </div>
                    </Card.Text>
                  </div>
                  <div
                    style={{
                      margin: "0 1vw 0 1vw",
                      height: "10vh",
                      borderLeft: "1px dotted #414242"
                    }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <h6>
                      {a.address}
                      <br />
                      <br />
                      <div style={{ display: "flex" }}>
                        <div style={{ fontWeight: "550", marginRight: "1vw" }}>
                          Monthly Rent:
                        </div>
                        {a.rent}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ fontWeight: "550", marginRight: "2.5vw" }}
                        >
                          Bedrooms:
                        </div>
                        {a.bed}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ fontWeight: "550", marginRight: "1.75vw" }}
                        >
                          Square Feet:
                        </div>
                        {a.sqft}
                      </div>
                    </h6>
                  </div>
                  <hr />
                  <hr />
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>
        <Modal show={show} onHide={this.handleClose}>
          <Form
            style={{
              textAlign: "left"
            }}
            onSubmit={this.handleAddPost}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add a new Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="reply">
                <Form.Control
                  type="textarea"
                  placeholder="Enter your post here"
                  style={{ marginRight: "1vw", width: "25vw", height: "10vw" }}
                  value={textVal2}
                  onChange={this.handleOnPost}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <div style={{ display: "flex" }}>
                <Button
                  variant="secondary"
                  onClick={this.handleClose}
                  style={{ marginRight: "5%", width: "150px" }}
                >
                  Close
                </Button>
                <Button
                  className="app-color"
                  type="submit"
                  style={{ width: "150px" }}
                >
                  Save Changes
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
        {post2.length > 0 && (
          <Card
            style={{
              marginTop: "3%",
              marginLeft: "2.5vw",
              width: "50%",
              textAlign: "left",
              height: "fit-content"
            }}
          >
            <Card.Body style={{ paddingBottom: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title style={{ fontWeight: "600" }}>
                  {post2[0].name}
                </Card.Title>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>{post2[0].date}</div>
                  <div>{post2[0].time}</div>
                </div>
              </div>
              <div>{post2[0].message}</div>
              <Form
                style={{
                  textAlign: "left",
                  display: "flex",
                  marginTop: "2vw"
                }}
                onSubmit={this.handleSubmit}
              >
                <Form.Group
                  className="mb-3"
                  controlId="reply"
                  style={{ display: "flex" }}
                >
                  <Form.Control
                    type="textarea"
                    placeholder="Enter your reply here"
                    style={{ marginRight: "1vw", width: "30vw" }}
                    value={textVal}
                    onChange={this.handleOnRep}
                  />
                </Form.Group>
                <Button
                  style={{ width: "10vw", height: "4vh" }}
                  type="submit"
                  className="app-color"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default withRouter(Apartments);
