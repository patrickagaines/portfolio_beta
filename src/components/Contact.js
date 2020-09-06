import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {

    const { toggleContact } = useContext(MyContext);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handleMessage = e => setMessage(e.target.value);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        toggleContact();
        setName("");
        setEmail("");
        setMessage("");
    }

    return(
        <div className="dialog-background row align-items-center justify-content-center">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-6">
                <Form className="dialog-box rounded text-left" onSubmit={sendMessage}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" value={name} onChange={handleName} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" value={email} onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group controlId="messageBody">
                        <Form.Label>Message</Form.Label>
                        <Form.Control required as="textarea" rows="3" value={message} onChange={handleMessage} />
                    </Form.Group>
                    <Row className="text-right">
                        <Col>
                            <Button onClick={toggleContact} className="dialog-button-cancel">
                                Cancel
                            </Button>
                            <Button className="dialog-button-submit" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Contact;