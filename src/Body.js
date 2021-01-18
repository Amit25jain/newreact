import React from 'react';
import Upper from './Upper';
import Card from 'react-bootstrap/Card';
import Contact from './Contact';
class Body extends React.Component
{
    render()
    {
        return(
            <>
             <Upper />
            <Contact />
            </>

        )
    }
};
export default Body;