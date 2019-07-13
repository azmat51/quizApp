import React from 'react';
import image from './logo.jpg';

class Header extends React.Component{
    //     constructor(props){
    //     super(props)
    // }
    render(){
        return(
         
          <nav className="navbar navbar-light bg-light ts-css">
            <a className="navbar-brand tss-css mt-2" href="#">
              <img  src={image} width="40" height="40" class="d-inline-block align-top mr-3" alt=""></img>
              <span className="mb-2">Quiz Application</span>
              
            </a>
          </nav>


        )
    }
}
export default Header;