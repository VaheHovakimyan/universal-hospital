import { Routes, Route, Outlet } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
// import {Browse}
import './Product.scss';
import Bandages from './Bandages/Bandages';
import Tanzifs from './Tanzifs/Tanzifs';
import Napkins from './Napkins/Napkins';
import Packages from './Packages/Packages';
import ProductsNav from './ProductsNav/ProductsNav';
import product_napkins from '../../Data/product_napkins.json';
import CardDisplay from './Card/CardNapkin/CardNapkinDisplay';
import CardDisplayNapkin from './Card/CardNapkin/CardNapkinDisplay';
import CardDisplayTanzif from './Card/CardTanzif/CardTanzif';
import CardDisplayBandages from './Card/CardBandage/CardBandageDisplay';
import CardDisplayPackages from './Card/CardPackages/CardPackages';
// import Card from './Card/Card';
// import { BrowserRouter } from 'react-router-dom';



export default function Product() {


    return (
        // <aside className='product_nav_flex'>
        //     <div className='product_nav'>
        <>

            <ProductsNav />

            {/* <aside className='products_main_flex'>
                <div className='products_main'> */}

            {/* <Outlet /> */}



            <Routes>

                <Route path="/bandages" element={
                    <Bandages />
                } />

                <Route
                    path='/bandages/:key'
                    element={<CardDisplayBandages />}
                />

                <Route path="/tanzifs" element={
                    <Tanzifs />
                } />

                <Route
                    path='/tanzifs/:key'
                    element={<CardDisplayTanzif />}
                />

                <Route path="/napkins" element={
                    <Napkins />
                } />

                <Route
                    path='/napkins/:key'
                    element={<CardDisplayNapkin />}
                />

                <Route path="/packages" element={
                    <Packages />
                } />

                <Route
                    path='/packages/:key'
                    element={<CardDisplayPackages />}
                />

                <Route path="*" element={
                    <Bandages />
                } />
            </Routes>


            {/* </div>

            </aside> */}

        </>

    )
}