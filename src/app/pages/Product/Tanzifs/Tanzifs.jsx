import sterile_image from '../../../images_icons/sterile.png';
import tanzif from '../../../images_icons/tanzif_a.png';
import product_tanzifs from '../../../Data/product_tanzif.json';
import '../../Home/HomeComps/HomeProduct/HomeProduct.scss';
import { Link } from 'react-router-dom';


export default function Tanzifs() {



    return (
        <div className='home_product'>

            <div className='home_products_block_flex'>
                <div className='home_products_main'>
                    <div className='home_products_block'>
                        {product_tanzifs.map((item) => {
                            return (
                                <div className='home_product_card' key={item.key}>
                                    <div className='card_sterile_part'>
                                        {item.sterile ? <img src={sterile_image} alt="sterile_image" /> : <div className='sterile_img_for_null'></div>}
                                    </div>
                                    <img src={tanzif} alt="medical_napkin" className='home_product_card_img' width="440px" height="250px" style={{ marginTop: '-100px' }} />

                                    <div className='home_card_name_parametrs_div'>

                                        <div className='home_card_name_div'>
                                            <p className='card_name'>{item.name}</p>
                                        </div>

                                        <div className='product_parametrs_flex'>
                                            <div className='product_parametrs'>
                                                <div className='product_size'>
                                                    <div className='product_size_flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                                            <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeOne.from}</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                            <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeOne.to}</span>

                                                    </div>
                                                </div>
                                                <div className='product_size'>
                                                    <div className='product_size_flex_b'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                                            <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeTwo.from}</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                            <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeTwo.to}</span>

                                                    </div>
                                                </div>
                                                <div className='product_size'>
                                                    <div className='product_size_flex_b'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                                            <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeThree.from}</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                            <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                                            <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                                        </svg>

                                                        <span className='home_product_card_size_text'>{item.parametrs.sizeThree.to}</span>

                                                    </div>
                                                </div>
                                          
                                            </div>
                                        </div>


                                    </div>

                                    <div className='home_product_card_button_div'>
                                        <Link to={`/product/tanzifs/${item.key}`}><button className='home_product_card_button'>ՏԵՍՆԵԼ ԱՎԵԼԻՆ</button></Link>
                                    </div>

                                </div>


                            )
                        })}
                    </div >
                </div>
            </div>
        </div>
    )
}