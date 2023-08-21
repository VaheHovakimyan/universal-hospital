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

<Outlet />



            <Routes>
                <Route path="/" element={
                    <Bandages />
                } />
                <Route path="/bandages" element={
                    <Bandages />
                } />
                <Route path="/tanzifs" element={
                    <Tanzifs />
                } />
                <Route path="/napkins" element={
                    <Napkins />
                } >
                    <Route path=':key' element={<CardDisplay />} />
                </Route>
                <Route path="/packages" element={
                    <Packages />
                } />
            </Routes>


            {/* </div>

            </aside> */}

        </>

    )
}