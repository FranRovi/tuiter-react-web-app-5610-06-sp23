import { Link } from "react-router-dom";

const Nav = () => {
    return(
       <div>
            <Link to="/">Labs</Link> | 
            <Link to="/"> Assignment 6</Link> | 
            <Link to="/a7"> Assignment 7</Link> |
            <Link to="/tuiter"> Assignment 8</Link> |
            <Link to="/tuiter"> Assignment 9</Link> |  
            <Link to="/tuiter"> Tuiter</Link> | 
       </div>
    );
 }
 export default Nav;