import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import first from './first.jpeg';

class Cards extends React.Component
{
    render()
    {
        return(
            <>
             <Card style={{ width: '400px',marginTop:'8px' }}>
                                <Card.Img variant="top" src={first}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
            </>
        )
    }
};
export default Cards;