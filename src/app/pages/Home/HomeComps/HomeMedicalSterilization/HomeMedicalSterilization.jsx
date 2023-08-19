import { Link } from 'react-router-dom';
import home_medical_ster_img from '../../../../images_icons/home_medical_ster_img.png';
import './HomeMedicalSterilization.scss';



export default function HomeMedicalSterilization() {
    return (
        <article className="home_medical_ster_main_flex">
            <div className='home_medical_ster_main'>

                <aside className="home_medical_ster_text_and_button">
                    <h2 className='home_medical_ster_title'>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
                    <p className='home_medical_ster_text'>Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում</p>

                    <Link to="/services" className="router_text">
                        <button className='home_medical_ster_see_more_button'>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
                    </Link>


                </aside>

                <aside className="home_medical_ster_img_div">

                    <img src={home_medical_ster_img} alt="medical_ster_img" className='home_medical_ster_img' />

                    <svg width="366" height="353" viewBox="0 0 366 353" fill="none" xmlns="http://www.w3.org/2000/svg" className='home_medical_ster_decor_img'>
                        <path d="M366 183C366 149.763 356.948 117.153 339.816 88.6719C322.684 60.1904 298.118 36.9126 268.756 21.3372C239.395 5.76184 206.345 -1.52291 173.156 0.264944C139.967 2.0528 107.892 12.8458 80.3731 31.4852C52.8545 50.1247 30.9318 75.9068 16.9583 106.064C2.98493 136.221 -2.51153 169.614 1.05901 202.659C4.62955 235.704 17.1322 267.152 37.225 293.628C57.3177 320.105 84.2417 340.609 115.107 352.94L137.806 296.122C117.261 287.914 99.3383 274.265 85.9633 256.641C72.5884 239.017 64.2659 218.083 61.8891 196.086C59.5123 174.09 63.1711 151.861 72.4727 131.787C81.7742 111.712 96.3673 94.5502 114.685 82.1426C133.003 69.7351 154.355 62.5506 176.447 61.3605C198.54 60.1704 220.54 65.0196 240.085 75.3875C259.63 85.7554 275.982 101.251 287.386 120.209C298.79 139.168 304.816 160.875 304.816 183H366Z" fill="url(#paint0_linear_19_30)" />
                        <defs>
                            <linearGradient id="paint0_linear_19_30" x1="183" y1="0" x2="183" y2="366" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A561A" />
                                <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                            </linearGradient>
                        </defs>
                    </svg>

                </aside>

            </div>
        </article>
    )
}