import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Flight/Login";
import Navbar from "./Flight/Nav";
import Signup from "./Flight/Signup";
import Footer from "./Flight/Footer";
import CustomerService from "./Flight/Faq";
import MediaCard from "./Flight/Card";
import Profile from "./Flight/profile";
import Home from "./Flight/Home";
import FlightTicket from "./Flight/Book";
import Contact from "./Flight/Contact";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<MediaCard/>} />
          <Route path="/faq" element={<CustomerService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<FlightTicket/>} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}