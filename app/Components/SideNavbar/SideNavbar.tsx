// components/SideNavbar.tsx
"use client";
import Nav from 'react-bootstrap/Nav'; 
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SideNavbar = ({ isOpen, onClose }: Props) => {
  return (
    <div className={`sideNavbar ${isOpen ? "open" : ""}`}>
      <Nav className="sideNavbar-container">
        <IoClose className="xIcon" onClick={onClose}/>
        <Nav.Link onClick={onClose} href="/">
          Home
        </Nav.Link>
        <Nav.Link onClick={onClose} href="/about">
          About
        </Nav.Link>
        <Nav.Link onClick={onClose} href="/services">
          Services
        </Nav.Link>
        <Nav.Link onClick={onClose} href="/shop">
          Shop
        </Nav.Link>
        <Nav.Link onClick={onClose} href="/review">
          Reviews
        </Nav.Link>
        <Nav.Link onClick={onClose} href="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideNavbar;
