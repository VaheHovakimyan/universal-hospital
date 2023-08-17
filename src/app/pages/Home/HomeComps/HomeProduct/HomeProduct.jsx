import medical_napkin from '../../../../images_icons/medical_napkin.png';
import './HomeProduct.scss';



export default function HomeProduct() {
    return (
        <article className='home_product'>
            <h2 className='home_product_title'>ԱՐՏԱԴՐԱՆՔ</h2>

            <aside className='home_products_block_flex'>
                <div className='home_products_block'>
                    <div className='home_product_card'>
                        <div className='card_sterile_part'></div>
                        <img src={medical_napkin} alt="medical_napkin" />
                        <p className='card_name'>բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                        <div className='product_parametrs'>
                            <div className='product_size'></div>
                            <div className='product_layer'></div>
                            <div className='product_count'></div>
                        </div>
                        <div>
                            <button>ՏԵՍՆԵԼ ԱՎԵԼԻՆ</button>
                        </div>
                    </div>
                    <div className='home_product_card'>
                        <img src={medical_napkin} alt="medical_napkin" />
                    </div>
                    <div className='home_product_card'>
                        <img src={medical_napkin} alt="medical_napkin" />
                    </div>
                </div>
            </aside>
        </article>
    )
}