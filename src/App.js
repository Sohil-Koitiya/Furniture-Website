import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Furniture from "./Furniture";
import ContactUs from "./ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Who from "./Who";
import Project from "./Project";
import Client from "./Client";
import Shopping from "./Shopping";
import AddToCart from "./AddToCart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Login from "./Login";
import { createContext, useState } from "react";
import Register from "./Register";
import { UserData } from "./UserData";

export const userlogin = createContext();

function App() {

  const [loginName,setLoginName] = useState('')
  const [loginEmail,setLoginEmail] = useState('')
  const [loginPassword,setLoginPassword] = useState('')

  const [logout,setLogout] = useState(false)

  const [welcomeName,setWelcomeName] = useState('')


  // console.log(loginName);
  // console.log(loginEmail);
  // console.log(loginPassword);

  

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <userlogin.Provider value={{loginName,setLoginName,loginEmail,setLoginEmail,loginPassword,setLoginPassword,logout,setLogout,welcomeName,setWelcomeName}}>
          <Navbar />
            <Routes>
              <Route path="/" element={<Header />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/shop" element={<Furniture />}></Route>
              <Route path="/who" element={<Who />}></Route>
              <Route path="/projects" element={<Project />}></Route>
              <Route path="/client" element={<Client />}></Route>
              <Route path="/shopping/:id" element={<Shopping />}></Route>
              <Route path="/Addtocart/:id" element={<AddToCart />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </userlogin.Provider>
          <Footer />
          <CopyRight />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
