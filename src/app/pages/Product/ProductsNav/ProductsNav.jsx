import { Link } from 'react-router-dom';
import '../Product.scss';



export default function ProductsNav() {


    return (
        <aside className='product_nav_flex'>
            <div className='product_nav'>

                <Link to="/product/bandages" className='router_text'>
                    <p>Բինտեր</p>
                </Link>

                <Link to="/product/tanzifs" className='router_text'>
                    <p>Թանզիֆեր</p>
                </Link>

                <Link to="/product/napkins" className='router_text'>
                    <p>Անձեռոցիկներ</p>
                </Link>

                <Link to="/product/packages" className='router_text'>
                    <p>Թոփեր</p>
                </Link>

            </div>
        </aside>
    )
}