import React, { Component } from "react";
import { withRouter } from "react-router";
import { Card, Button, Form } from "react-bootstrap";

class Restaurants extends Component {
  state = {
    replies: [
      {
        name: "Jorge Hernandez",
        date: "9/21/2022",
        time: "5:32pm",
        message: "What kind of cuisine are you looking for?"
      },
      {
        name: "John Vicks",
        date: "9/21/2022",
        time: "7:55pm",
        message: "I was looking for a good Italian restaurant."
      },
      {
        name: "Giueseppe De Rossi",
        date: "9/22/2022",
        time: "12:12pm",
        message:
          "I highly recommend Postino in Buckhead, they have brunch as well."
      },
      {
        name: "Danny Drinkwater",
        date: "9/22/2022",
        time: "3:05pm",
        message: "Olive Garden in Dunwoody is also a good option."
      }
    ],
    textVal: "",
    restaurants: [
      {
        img: "/postino.png",
        price: "$10 - $20",
        cuisine: "Italian",
        phone: "(678)-608-1955",
        address: "3655 Roswell Rd NE, Atlanta, GA 30342"
      },
      {
        img: "/poorCalvins.png",
        price: "$30 - $45",
        cuisine: "Asian Fusion",
        phone: "(404)-254-4051",
        address: "510 Piedmont Ave NE, Atlanta, GA 30308"
      },
      {
        img: "/southCityKitchen.png",
        price: "$20 - 55",
        cuisine: "Southern",
        phone: "(404)-873-7358",
        address: "1144 Crescent Ave NE, Atlanta, GA 30309"
      },
      {
        img: "/aviva.png",
        price: "$10 - 20",
        cuisine: "Mediterranean",
        phone: "(404)-698-3600",
        address: "225 Peachtree St NE Ste B-30 Atlanta, GA 30303"
      }
    ]
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    var newRep = {
      name: "Jaydeep Rotithor",
      date: "9/23/2022",
      time: "5:06 pm",
      message: form.reply.value
    };
    var { replies } = this.state;
    replies.push(newRep);
    this.setState({ replies, textVal: "" });
  };

  handleOnRep = (event) => {
    event.preventDefault();
    this.setState({ textVal: event.target.value });
  };

  render() {
    var { replies, textVal, restaurants } = this.state;
    return (
      <div style={{ marginTop: "2%" }}>
        <Button
          style={{ float: "right", marginRight: "3%" }}
          className="app-color"
        >
          Create New Post
        </Button>
        <div
          style={{
            marginTop: "3%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Card
            style={{
              marginLeft: "3vw",
              width: "49%",
              textAlign: "left",
              height: "fit-content"
            }}
          >
            <Card.Body style={{ paddingBottom: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title style={{ fontWeight: "600" }}>
                  John Vicks
                </Card.Title>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>9/21/2022</div>
                  <div>8:37 am</div>
                </div>
              </div>
              <div>
                Hey everyone! I'm looking for recommendations for good
                restaurants around Atlanta. I'm open to anywhere in the city.
                Does anyone have any suggestions?
              </div>
              <hr />
              <Card.Text style={{ height: "20vh", overflowY: "scroll" }}>
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
              marginLeft: "3vw",
              width: "44%",
              fontWeight: "500",
              height: "fit-content"
            }}
          >
            <Card.Title style={{ marginTop: "2vh", fontWeight: "700" }}>
              Top Restaurants in Atlanta
            </Card.Title>
            <Card.Body
              style={{
                height: "40.5vh",
                overflowY: "scroll",
                paddingBottom: "0"
              }}
            >
              {restaurants.map((a) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "fit-content",
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
                            height: "17vh",
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
                          Price Range:
                        </div>
                        {a.price}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ fontWeight: "550", marginRight: "2.5vw" }}
                        >
                          Cuisine:
                        </div>
                        {a.cuisine}
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ fontWeight: "550", marginRight: "2.75vw" }}
                        >
                          Phone:
                        </div>
                        {a.phone}
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
        <Card
          style={{
            marginTop: "3%",
            marginLeft: "3vw",
            width: "48%",
            textAlign: "left",
            height: "fit-content"
          }}
        >
          <Card.Body style={{ paddingBottom: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card.Title style={{ fontWeight: "600" }}>Sarah Kumar</Card.Title>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "10px" }}>9/21/2022</div>
                <div>2:08 am</div>
              </div>
            </div>
            <div>
              Hey Folks. I was wondering if the lunch menu for the cafeteria is
              posted anywhere.
            </div>
            <hr />
            <Card.Text style={{}}>
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
                  <div style={{ fontWeight: "550" }}>Prakash Singh</div>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>9/23/22</div>
                    <div>12:11 pm</div>
                  </div>
                </div>
                <div>Yeah, its on the Atlanta Food Team channel on Teams</div>
                <hr />
              </div>
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
      </div>
    );
  }
}

export default withRouter(Restaurants);
