import partner_logo from '../../images_icons/partner_logo.png';
import partners from '../../Data/home_partners.json';
import './Partners.scss';
// import './Partners.scss';



export default function Partners(){
    return(
        <article className="partners_main_block">
            <h2 className="partners_title">ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
            <aside className="partners_block_flex">
                <div className="partners_block">
                    {partners.map((item) => {
                        return (
                            <div className='partners_card_main' key={item.key}>
                                <img src={partner_logo} alt="partner_logo" />
                            </div>
                        )
                    })}
                </div>
            </aside>

        </article>
    )
}