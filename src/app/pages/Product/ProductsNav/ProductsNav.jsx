import { NavLink } from 'react-router-dom';
import '../Product.scss';



export default function ProductsNav() {


    return (
        <aside className='product_nav_flex'>
            <div className='product_nav'>

                <NavLink
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/product/bandages"
                    className='router_text'
                >
                    <p>Բինտեր</p>
                </NavLink>

                <NavLink
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/product/tanzifs"
                    className='router_text'
                >
                    <p>Թանզիֆեր</p>
                </NavLink>

                <NavLink
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/product/napkins"
                    className='router_text'
                >
                    <p>Անձեռոցիկներ</p>
                </NavLink>

                <NavLink
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/product/packages"
                    className='router_text'
                >
                    <p>Թոփեր</p>
                </NavLink>

            </div>
        </aside>
    )
}