import product_packages from '../../../../Data/product_package.json';
import sterile_image from '../../../../images_icons/sterile.png';
import '../../../Home/HomeComps/HomeProduct/HomeProduct.scss';
import { useParams } from "react-router-dom";
import '../CardNapkin/CardNapkinDisplay.scss';
import packages from '../../../../images_icons/packages.png';



export default function CardDisplayPackages() {

    const { key } = useParams();


    return (

        <div className='product_card_page_flex' style={{padding: '100px 0px 100px 0px'}}>
            <div className='product_card_page'>

                <div className='product_card_page_img'>

                    {/* <div className='card_sterile_part'>
                        {product_packages[key].sterile ? <img src={sterile_image} alt="sterile_image" /> : <div className='sterile_img_for_null'></div>}
                    </div> */}

                    <div className='home_product_card_img_div'>
                        <img src={packages} alt="medical_napkin" className='home_product_card_img' />
                    </div>


                </div>

                <div className='product_card_page_text_div'>
                    <h1 className='product_card_page_title'>{product_packages[key].name}</h1>

                    <div className='product_card_page_params'>

                        <div className='product_parametrs'>
                            <div className='product_size'>
                                <div className='product_size_flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                        <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeOne.from}</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeOne.to}</span>

                                </div>
                            </div>
                            <div className='product_size'>
                                <div className='product_size_flex_b'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                        <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeTwo.from}</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeTwo.to}</span>

                                </div>
                            </div>
                            <div className='product_size'>
                                <div className='product_size_flex_b'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                                        <path d="M0 1H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M0 12H9.50722" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M4.10947 8.51486V4.48524H5.08042V8.51486H6.41548L4.59495 10.4825L2.77441 8.51486H4.10947ZM4.59495 2.51758L6.41548 4.48524H2.77441L4.59495 2.51758Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeThree.from}</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M0.253906 10.2539L0.253906 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M11.2539 10.2539L11.2539 0.746683" stroke="#12724F" stroke-width="0.462357" />
                                        <path d="M7.76877 6.14468L3.73914 6.14468V5.17373H7.76877V3.83867L9.73642 5.6592L7.76877 7.47974V6.14468ZM1.77148 5.6592L3.73914 3.83867L3.73914 7.47974L1.77148 5.6592Z" fill="#12724F" />
                                    </svg>

                                    <span className='home_product_card_size_text'>{product_packages[key].parametrs.sizeThree.to}</span>

                                </div>
                            </div>

                        </div>
                    </div>

                    <p className='product_card_page_text'>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting,
                    </p>
                </div>

            </div>
        </div>

    )
}