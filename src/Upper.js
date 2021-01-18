import React from 'react';
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const information =
{
    s1: <FontAwesomeIcon icon={faPlus} />,

}


class Upper extends React.Component {
    render() {
        return (
            <>
                <Container fluid>
                    <h2 className="mt-3 mb-3 text-center">Card design</h2>
                    <Row>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                        <Col className="col col-lg-4 col-sm-6">
                            <Cards />
                        </Col>
                    </Row>
                </Container>






                <Container fluid>
                    <h2 className="mt-3 mb-3 text-center">Accordion design</h2>

                    <Accordion>

                        <Row>
                            <Col className="col col-lg-6">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {information.s1}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Col>

                            <Col className="col col-lg-6">

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            {information.s1}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Col>
                            <Col className="mt-2 col col-lg-6">

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            {information.s1}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Col>
                            <Col className="mt-2 col col-lg-6">

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            {information.s1}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion>
                </Container>


                <Container fluid className="mt-5 mb-5 border border-secondary p-4">
                    <Container className="p-4 border border-dark">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    </Form>
                    </Container>
                </Container>
            </>
        )
    }
};
export default Upper;