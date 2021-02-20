import { useState } from "react";
import { Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Jumbotron, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import Slider from 'infinite-react-carousel';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
      <Jumbotron>
        <h1>จั๋นติ๊บ</h1>
      </Jumbotron>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">หน้าแรก</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">พูดคุย/ติดต่อ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            </Nav>
          <NavbarText>อิอิซ่า</NavbarText>
        </Collapse>
      </Navbar>
    <Slider dots autoplay={true} duration={100} >
    <div>
      <img src="https://www.cmru.ac.th/assets/images/banners/th/04-02-2021/5781919f63882117a2c1233753b37f1a36d7ef05.png" alt="รูปแรก"></img>
    </div>
    <div>
    <img src="https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png" alt="รูปสอง"></img>
    </div>
    <div>
    <img src="https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png" alt="รูปสาม"></img>
    </div>
    <div>
    <img src="https://www.cmru.ac.th/assets/images/banners/th/06-01-2021/98ffb400b8efa9c2c1ef328aa3ddbbb011049e41.png" alt="รูปสี่"></img>
    </div>
  </Slider>
    </div>
    
      <h1>กุ้กซี่เบ้ว</h1>
      </Container>
    </div>
  );
};

export default Home;
