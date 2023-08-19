import { Link } from 'react-router-dom';
import partner_logo from '../../../../images_icons/partner_logo.png';
import home_partners from '../../../../Data/home_partners.json';
import './HomePartners.scss';



export default function HomePartners() {
    return (
        <article className="home_partners_main_block">
            <h2 className="home_partners_title">ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
            <aside className="home_partners_block_flex">
                <div className="home_partners_block">
                    {home_partners.map((item) => {
                        return (
                            <div className='home_partners_card_main' key={item.key}>
                                <img src={partner_logo} alt="partner_logo" />
                            </div>
                        )
                    })}
                </div>
            </aside>

            <div className='home_partners_see_all_button_block'>
                {/* <button className='home_partners_see_all_button'> */}
                    <Link to="/partners" className="router_text">
                    <button className='home_partners_see_all_button'>
                        ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
                        </button>
                    </Link>


                {/* </button> */}
            </div>

        </article>
    )
}