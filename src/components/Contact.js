import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';
import { API } from 'aws-amplify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

const Contact = ({ notify }) => {
    const { toggleContact } = useContext(MyContext);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[loading, setLoading] = useState(false);

    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handleMessage = e => setMessage(e.target.value);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const result = await API.post('messagelambda', '/message', {
                body: {
                    name,
                    message,
                    email
                }
            })
            console.log({result});
            if (result.message === "Success") {
                setName("");
                setEmail("");
                setMessage("");
                notify();
                toggleContact();
            }
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <div className="dialog-background row align-items-center justify-content-center">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-6">
                <Form className="dialog-box rounded text-left" onSubmit={handleSendMessage}>
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
                    <Row>
                        <Col>
                            { loading &&
                            <div style={{ margin: "auto" }} className="spinner-border d-block" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row className="text-right">
                        <Col>
                            <Button onClick={toggleContact} className="dialog-button-cancel">
                                Cancel
                            </Button>
                            <Button className="dialog-button-submit btn-secondary" type="submit">
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