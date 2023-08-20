import sterilization_img from '../../images_icons/medical_ster_img.png';
import individual_order from '../../images_icons/individual_order.png';
import './Services.scss';



export default function Services() {
    return (
        <article className='services_main'>
            <aside className='services_first_aside_flex'>
                <div className='services_first_aside'>
                    <div className='services_title_text_button'>
                        <h2 className='services_title'>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
                        <p className='services_text'>
                            Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական
                            վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        <button className='services_button'>
                            ՊԱՏՎԻՐԵԼ ԶԱՆԳ
                        </button>
                    </div>

                    <div className='services_first_img_and_decor'>

                        <img src={sterilization_img} alt="sterilization_img" className='services_first_ster_img' />

                        <svg width="366" height="353" viewBox="0 0 366 353" fill="none" xmlns="http://www.w3.org/2000/svg" className='services_first_decor'>
                            <path d="M366 183C366 149.763 356.948 117.153 339.816 88.6719C322.684 60.1904 298.118 36.9126 268.756 21.3372C239.395 5.76184 206.345 -1.52291 173.156 0.264944C139.967 2.0528 107.892 12.8458 80.3731 31.4852C52.8545 50.1247 30.9318 75.9068 16.9583 106.064C2.98493 136.221 -2.51153 169.614 1.05901 202.659C4.62955 235.704 17.1322 267.152 37.225 293.628C57.3177 320.105 84.2417 340.609 115.107 352.94L137.806 296.122C117.261 287.914 99.3383 274.265 85.9633 256.641C72.5884 239.017 64.2659 218.083 61.8891 196.086C59.5123 174.09 63.1711 151.861 72.4727 131.787C81.7742 111.712 96.3673 94.5502 114.685 82.1426C133.003 69.7351 154.355 62.5506 176.447 61.3605C198.54 60.1704 220.54 65.0196 240.085 75.3875C259.63 85.7554 275.982 101.251 287.386 120.209C298.79 139.168 304.816 160.875 304.816 183H366Z" fill="url(#paint0_linear_59_921)" />
                            <defs>
                                <linearGradient id="paint0_linear_59_921" x1="183" y1="0" x2="183" y2="366" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0A561A" />
                                    <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>

            </aside>

            <aside className='services_second_aside_flex'>
                <div className='services_second_aside'>

                    <div className='services_second_img_and_decor'>

                        <img src={individual_order} alt="individual_order_img" className='services_second_ster_img' />

                        <svg width="366" height="353" viewBox="0 0 366 353" fill="none" xmlns="http://www.w3.org/2000/svg" className='services_second_decor'>
                            <path d="M0 183C0 149.763 9.05197 117.153 26.1842 88.6719C43.3164 60.1904 67.8819 36.9126 97.2437 21.3372C126.605 5.76184 159.655 -1.52291 192.844 0.264944C226.033 2.0528 258.108 12.8458 285.627 31.4852C313.146 50.1247 335.068 75.9068 349.042 106.064C363.015 136.221 368.512 169.614 364.941 202.659C361.37 235.704 348.868 267.152 328.775 293.628C308.682 320.105 281.758 340.609 250.893 352.94L228.194 296.122C248.739 287.914 266.662 274.265 280.037 256.641C293.412 239.017 301.734 218.083 304.111 196.086C306.488 174.09 302.829 151.861 293.527 131.787C284.226 111.712 269.633 94.5502 251.315 82.1426C232.997 69.7351 211.645 62.5506 189.553 61.3605C167.46 60.1704 145.46 65.0196 125.915 75.3875C106.37 85.7554 90.0182 101.251 78.6139 120.209C67.2097 139.168 61.1841 160.875 61.1841 183H0Z" fill="url(#paint0_linear_65_1275)" />
                            <defs>
                                <linearGradient id="paint0_linear_65_1275" x1="183" y1="0" x2="183" y2="366" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0A561A" />
                                    <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg>


                    </div>

                    <div className='services_title_text_button'>
                        <h2 className='services_title'>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ </h2>
                        <p className='services_text'>
                            Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                            orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className='services_button'>
                            ՊԱՏՎԻՐԵԼ ԶԱՆԳ
                        </button>
                    </div>
                </div>

            </aside>

        </article>
    )
}