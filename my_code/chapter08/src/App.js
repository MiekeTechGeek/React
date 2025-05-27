// import React, { Component } from 'react';
// import GitHub from './GitHub';
// import GitHubUser from './GitHubUser';
// import Dessert from './Dessert';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   render() {
//     return (
//       //specify which routes render which components
//       <BrowserRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/github">GitHub</Nav.Link>
//                 <Nav.Link href="/dessert">Table</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//           <Switch>
//             <Route path="/github/user/:login/:id" component={GitHubUser} />
//             <Route path="/github" component={GitHub} />
//             <Route exact path="/" component={Home} />
//             <Route exact path="/dessert" component={Dessert} />
//             <Route path="/*" component={NotFound} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }
// //http://localhost:3000/github/user/J4d4-M4thele/102987102

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         Home
//       </div>
//     )
//   }
// }

// class NotFound extends Component {
//   render() {
//     return <div>Not Found</div>
//   }
// }
// export default App;


import React, { Component } from 'react';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import Dessert from './Dessert';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      //specify which routes render which components
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/dessert">Table</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/dessert" component={Dessert} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      submitted: false
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', this.state);
    this.setState({ submitted: true });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false
      });
    }, 3000);
  }

  render() {
    const { name, email, subject, message, submitted } = this.state;

    return (
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 mb-3">Get In Touch</h1>
              <p className="lead text-muted">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </div>

            <Row>
              <Col lg={8}>
                <Card className="shadow-sm border-0">
                  <Card.Body className="p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    
                    {submitted ? (
                      <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Thank you!</h4>
                        <p className="mb-0">Your message has been sent successfully. We'll get back to you soon!</p>
                      </div>
                    ) : (
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Name *</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInputChange}
                                required
                                placeholder="Your full name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email *</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleInputChange}
                                required
                                placeholder="your.email@example.com"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Form.Group className="mb-3">
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={this.handleInputChange}
                            required
                            placeholder="What's this about?"
                          />
                        </Form.Group>
                        
                        <Form.Group className="mb-4">
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={message}
                            onChange={this.handleInputChange}
                            required
                            placeholder="Tell us more about your project or question..."
                          />
                        </Form.Group>
                        
                        <Button 
                          variant="primary" 
                          type="submit" 
                          size="lg"
                          className="w-100"
                        >
                          Send Message
                        </Button>
                      </Form>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4}>
                <div className="mt-4 mt-lg-0">
                  <Card className="shadow-sm border-0 mb-4">
                    <Card.Body className="p-4">
                      <h5 className="mb-3">Contact Information</h5>
                      <div className="mb-3">
                        <strong>Email</strong>
                        <p className="text-muted mb-0">hello@example.com</p>
                      </div>
                      <div className="mb-3">
                        <strong>Phone</strong>
                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                      </div>
                      <div className="mb-3">
                        <strong>Address</strong>
                        <p className="text-muted mb-0">
                          123 Business St<br />
                          Suite 100<br />
                          City, State 12345
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                  
                  <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                      <h5 className="mb-3">Business Hours</h5>
                      <div className="mb-2">
                        <strong>Monday - Friday</strong>
                        <p className="text-muted mb-0">9:00 AM - 6:00 PM</p>
                      </div>
                      <div className="mb-2">
                        <strong>Saturday</strong>
                        <p className="text-muted mb-0">10:00 AM - 4:00 PM</p>
                      </div>
                      <div>
                        <strong>Sunday</strong>
                        <p className="text-muted mb-0">Closed</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;
