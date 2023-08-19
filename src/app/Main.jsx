import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import WebsiteEnd from "./components/WebsiteEnd/WebsiteEnd";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Product from "./pages/Product/Product";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
// import { BrowserRouter } from 'react-router-dom';
// import Bandages from "./pages/Product/Bandages/Bandages";
// import Tanzifs from "./pages/Product/Tanzifs/Tanzifs";
// import Napkins from "./pages/Product/Napkins/Napkins";
// import Packages from "./pages/Product/Packages/Packages";





export default function Main() {


    return (
        // <div className="main_flex">
        //     <div className="main">
        //         <div className="main_elements">
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/about" element={
                    <About />
                } />
                <Route path="/product/*" element={
                    <Product />
                    // <Routes>
                    //     <Route path="/product/bandages" element={
                    //         <Bandages />
                    //     } />
                    //     <Route path="/tanzifs" element={
                    //         <Tanzifs />
                    //     } />
                    //     <Route path="/napkins" element={
                    //         <Napkins />
                    //     } />
                    //     <Route path="/packages" element={
                    //         <Packages />
                    //     } />
                    // </Routes>
                } />
                <Route path="/services" element={
                    <Services />
                } />
                <Route path="/partners" element={
                    <Partners />
                } />
                <Route path="/contact" element={
                    <Contact />
                } />
                <Route path="*" element={
                    <NotFound />
                } />
            </Routes>
            <Footer />
            {/* <WebsiteEnd /> */}
            {/* </div>
            </div>
        </div> */}
        </>
    )
}