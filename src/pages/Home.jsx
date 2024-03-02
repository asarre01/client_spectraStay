import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Feature></Feature>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
}

export default Home;
