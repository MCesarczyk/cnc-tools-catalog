import React from "react";
import Header from "./Header/index.js";
import Footer from "./Footer/index.js";
import { Wrapper } from "./Wrapper/index.js";

const Home = ({ children }) => (
  <Wrapper>
    <Header />
    <h1>CNC TOOLS MANAGER</h1>
    <h2>UNDER CONSTRUCTION</h2>
    {/* {children}  */}
    <Footer />
  </Wrapper>
);

export default Home;