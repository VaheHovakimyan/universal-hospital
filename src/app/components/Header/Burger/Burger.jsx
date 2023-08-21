import { NavLink } from "react-router-dom";
import './Burger.scss';
import language_icon from '../../../images_icons/lang_icon.png';


// Burger header component


export default function Burger({ burgerBool, setBurgerBool }) {

    const onChangeBurgerState = () => {
        setBurgerBool(!burgerBool);
    }

    return (

        <div className={burgerBool ? "burger_header" : "burger_header_hidden"}>

            {/* Burger main block div */}

            <div className='header_router_div_burger'>
                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/"
                    className="router_text"
                    id="link"
                >
                    <p>ԳԼԽԱՎՈՐ</p>
                </NavLink>

                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/about"
                    className="router_text"
                    id="link"
                >
                    <p>ՄԵՐ ՄԱՍԻՆ</p>
                </NavLink>

                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/product"
                    className="router_text"
                    id="link"
                >
                    <p>ԱՐՏԱԴՐԱՆՔ</p>
                </NavLink>

                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/services"
                    className="router_text"
                    id="link"
                >
                    <p>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</p>
                </NavLink>

                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/partners"
                    className="router_text"
                    id="link"
                >
                    <p>ԳՈՐԾԸՆԿԵՐՆԵՐ</p>
                </NavLink>

                <NavLink
                    onClick={onChangeBurgerState}
                    style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                    to="/contact"
                    className="router_text"
                    id="link"
                >
                    <p>ՀԵՏԱԴԱՐՁ ԿԱՊ</p>
                </NavLink>

                <div className='language_select_block'>
                    <img src={language_icon} alt="language_icon" width="28px" height="17px" className='language_icon' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1.21094 1L3.80041 4.45263L6.82146 1" stroke="#A99E9E" stroke-width="0.863158" />
                    </svg>
                </div>
            </div>

        </div>

    )
}