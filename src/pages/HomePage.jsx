import React from "react";
import NavBar from "../components/navBar/NavBar";
import '../index.css'
import HeroSection from "../components/heroSection.jsx/HeroSection";
import Testimonials from "../components/testimonials/Testimonials";
import OfferSection from "../components/offerSection/OfferSection";
import BlogSection from "../components/blogSection/BlogSection";
import Footer from "../components/footer/Footer";
import ProductList from "../components/productsSection/ProductsSection";
import WhyChooseSection from "../components/MyChooseSection/MyChooseSection";

const HomePage = ()=>{
    return (<div className="home-page">
        <NavBar/>
        <HeroSection />
        <WhyChooseSection/>
        <ProductList/>
        <Testimonials/>
        <OfferSection />
        <BlogSection/>
        <Footer/>
    </div>)
}

export default HomePage;