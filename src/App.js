import React  from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import Videoslider from './Videoslider';
import Body from './Body';

class App extends React.Component
{
    render()
    {
        return(
           <>
           <Menu />
            <Videoslider />
            <Body />
           <Footer />
           </>
        )
    }
}
export default App;