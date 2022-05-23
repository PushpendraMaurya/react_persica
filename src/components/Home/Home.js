import React from "react";
import "./Home.css";
// import logo from '../../logo.svg';
import { Navbar, Container ,Carousel} from "react-bootstrap";
import bg from '../../images/bg.jpeg';
import bg1 from '../../images/bg1.jpeg';
import logo from '../../images/LOGO_P.jpg';
import Footer from "../Footer";


const Home = () => {
  return (
    <>
      <div className="Navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
        </Container>
      </div>
     
      <div className="bg">
      <div>
       <img className="bg_pic"src={bg}/>
      </div>
      <div>
      <img className="bg_pic"src={bg1}/>
      </div>
      <div className="front_menu">
      <div className="sub_menu1">
        Home
        </div>
      <div className="sub_menu2">About Us</div>
      <div className="sub_menu3">Our Product</div>
      <div className="sub_menu4">All Partners</div>
      <div className="sub_menu5">Contact Us  </div>
      </div>
      <Footer/>
      </div>
    </>
    
  ); 
};

export default Home;
