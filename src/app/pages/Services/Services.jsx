import { useState } from 'react';
import sterilization_img from '../../images_icons/medical_ster_img.png';
import individual_order from '../../images_icons/individual_order.png';
import './Services.scss';



export default function Services() {

    const [serviceName,setServiceName] = useState("");
    const [telNumber,setTelNumber] = useState("");
    const [lastName,setLastName] = useState("");
    const [name,setName] = useState("");

    const [serviceNameValid,setServiceNameValid] = useState("");
    const [telNumberValid,setTelNumberValid] = useState("");
    const [lastNameValid,setLastNameValid] = useState("");
    const [nameValid,setNameValid] = useState("");

    const [orderCall,setOrderCall] = useState(true);
    const [popUp,setPopUp] = useState(false);


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    function SendMessage(evt) {

        evt.preventDefault();

        setServiceNameValid(serviceName === "");
        setTelNumberValid(telNumber === "");
        setLastNameValid(lastName === "");
        setNameValid(name === "");

        const data = {
            name,
            lastName,
            telNumber,
            serviceName
        }

        if (
            serviceName &&
            telNumber &&
            lastName &&
            name
        ) {

            // API


            setOrderCall(!orderCall);
            setServiceName("");
            setTelNumber("");
            setPopUp(!popUp);
            setLastName("");
            setName("");

        }

    }

    return (
        <article className='services_main'>

            <div className={popUp ? 'popup_main' : 'popup_main_hidden'}>

                <div className='close_button' onClick={(evt) => {
                    evt.preventDefault();
                    setPopUp(!popUp);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0727 4.08437C37.2948 3.86247 37.4711 3.59898 37.5915 3.30896C37.7118 3.01893 37.7738 2.70804 37.774 2.39404C37.7742 2.08003 37.7126 1.76907 37.5926 1.47889C37.4726 1.18872 37.2966 0.925015 37.0747 0.702844C36.8528 0.480674 36.5894 0.304386 36.2993 0.184044C36.0093 0.0637014 35.6984 0.00166272 35.3844 0.00146972C35.0704 0.00127673 34.7594 0.0629332 34.4693 0.182919C34.1791 0.302904 33.9154 0.478869 33.6932 0.700766L19.2734 15.1206L4.8578 0.700766C4.40911 0.252073 3.80055 -4.72775e-09 3.166 0C2.53146 4.72775e-09 1.9229 0.252073 1.4742 0.700766C1.02551 1.14946 0.773438 1.75802 0.773438 2.39257C0.773437 3.02711 1.02551 3.63567 1.4742 4.08437L15.894 18.5L1.4742 32.9156C1.25203 33.1378 1.0758 33.4016 0.95556 33.6918C0.835323 33.9821 0.773438 34.2932 0.773438 34.6074C0.773438 34.9216 0.835323 35.2327 0.95556 35.523C1.0758 35.8133 1.25203 36.0771 1.4742 36.2992C1.9229 36.7479 2.53146 37 3.166 37C3.4802 37 3.79132 36.9381 4.0816 36.8179C4.37188 36.6976 4.63563 36.5214 4.8578 36.2992L19.2734 21.8794L33.6932 36.2992C34.1419 36.7474 34.7503 36.9989 35.3844 36.9985C36.0186 36.9981 36.6266 36.7458 37.0747 36.2971C37.5229 35.8485 37.7744 35.2401 37.774 34.606C37.7736 33.9718 37.5214 33.3638 37.0727 32.9156L22.6529 18.5L37.0727 4.08437Z" fill="#12724F" />
                    </svg>
                </div>

                <div className='popup_text_div'>
                    <h2 className='thx_title'>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</h2>
                    <p className='popup_text'>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ</p>
                </div>

                <div className='correct'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="222" height="222" viewBox="0 0 222 222" fill="none" className='correct_circle'>
                        <path d="M83.2664 3.52047C108.511 -2.99354 135.243 -0.413633 158.776 10.8079C182.309 22.0295 201.141 41.1765 211.971 64.8923C222.8 88.6081 224.937 115.379 218.005 140.512C211.073 165.645 195.516 187.537 174.06 202.348C152.604 217.159 126.62 223.946 100.661 221.517C74.7033 219.089 50.4282 207.601 32.0919 189.067C13.7556 170.534 2.52821 146.137 0.37811 120.154C-1.77199 94.1714 5.29238 68.261 20.3328 46.9652L32.2123 55.3553C19.1425 73.8608 13.0038 96.3764 14.8722 118.955C16.7405 141.533 26.4969 162.733 42.4307 178.839C58.3645 194.944 79.459 204.927 102.016 207.037C124.573 209.147 147.153 203.25 165.798 190.379C184.442 177.508 197.961 158.486 203.985 136.646C210.008 114.805 208.152 91.542 198.741 70.9335C189.33 50.325 172.966 33.6867 152.516 23.9354C132.067 14.1842 108.837 11.9423 86.9002 17.6028L83.2664 3.52047Z" fill="url(#paint0_linear_65_1339)" />
                        <defs>
                            <linearGradient id="paint0_linear_65_1339" x1="181" y1="32" x2="-46.5" y2="177" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#12724F" />
                                <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="129" height="94" viewBox="0 0 129 94" fill="none" className='correct_middle_vector'>
                        <path d="M43.7594 93.3812C42.6427 93.3812 41.5958 93.2054 40.6188 92.8536C39.6417 92.5019 38.7344 91.91 37.8969 91.0781L2.30313 55.4844C0.767709 53.949 0 51.925 0 49.4125C0 46.9 0.767709 44.876 2.30313 43.3406C3.83854 41.8052 5.79271 41.0375 8.16563 41.0375C10.5385 41.0375 12.4927 41.8052 14.0281 43.3406L43.7594 73.0719L114.528 2.30312C116.064 0.767705 118.054 0 120.499 0C122.945 0 124.933 0.767705 126.462 2.30312C127.998 3.83854 128.766 5.829 128.766 8.2745C128.766 10.72 127.998 12.7077 126.462 14.2375L49.6219 91.0781C48.7844 91.9156 47.8771 92.5102 46.9 92.862C45.9229 93.2137 44.876 93.3868 43.7594 93.3812Z" fill="#12724F" />
                    </svg>
                </div>
            </div>

            <div className={orderCall ? 'order_call_main' : 'order_call_main_hidden'}>

                <div className='order_call_elements'>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setOrderCall(!orderCall);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0727 4.08437C37.2948 3.86247 37.4711 3.59898 37.5915 3.30896C37.7118 3.01893 37.7738 2.70804 37.774 2.39404C37.7742 2.08003 37.7126 1.76907 37.5926 1.47889C37.4726 1.18872 37.2966 0.925015 37.0747 0.702844C36.8528 0.480674 36.5894 0.304386 36.2993 0.184044C36.0093 0.0637014 35.6984 0.00166272 35.3844 0.00146972C35.0704 0.00127673 34.7594 0.0629332 34.4693 0.182919C34.1791 0.302904 33.9154 0.478869 33.6932 0.700766L19.2734 15.1206L4.8578 0.700766C4.40911 0.252073 3.80055 -4.72775e-09 3.166 0C2.53146 4.72775e-09 1.9229 0.252073 1.4742 0.700766C1.02551 1.14946 0.773438 1.75802 0.773438 2.39257C0.773437 3.02711 1.02551 3.63567 1.4742 4.08437L15.894 18.5L1.4742 32.9156C1.25203 33.1378 1.0758 33.4016 0.95556 33.6918C0.835323 33.9821 0.773438 34.2932 0.773438 34.6074C0.773438 34.9216 0.835323 35.2327 0.95556 35.523C1.0758 35.8133 1.25203 36.0771 1.4742 36.2992C1.9229 36.7479 2.53146 37 3.166 37C3.4802 37 3.79132 36.9381 4.0816 36.8179C4.37188 36.6976 4.63563 36.5214 4.8578 36.2992L19.2734 21.8794L33.6932 36.2992C34.1419 36.7474 34.7503 36.9989 35.3844 36.9985C36.0186 36.9981 36.6266 36.7458 37.0747 36.2971C37.5229 35.8485 37.7744 35.2401 37.774 34.606C37.7736 33.9718 37.5214 33.3638 37.0727 32.9156L22.6529 18.5L37.0727 4.08437Z" fill="#12724F" />
                        </svg>
                    </div>

                    <h2 className='order_call_title'>Պատվիրել զանգ</h2>

                    <div className='order_call_inputs'>

                        <div className='name_surname_inputs'>

                            <div>

                                <input
                                    type="text"
                                    placeholder='Անուն'
                                    className='name_surname_input'
                                    value={name}
                                    onChange={handleChange(setName)}
                                />

                                <p className={nameValid ? 'invalid_text' : 'valid_text'}>
                                    <span className='invalid_valid_text'>
                                        Անվան դաշտը դատարկ է
                                    </span>
                                </p>

                            </div>

                            <div>

                                <input
                                    type="text"
                                    placeholder='Ազգանուն'
                                    className='name_surname_input'
                                    value={lastName}
                                    onChange={handleChange(setLastName)}
                                />

                                <p className={lastNameValid ? 'invalid_text' : 'valid_text'}>
                                    <span className='invalid_valid_text'>
                                        Ազգանվան դաշտը դատարկ է
                                    </span>
                                </p>

                            </div>

                        </div>

                        <input
                            type="text"
                            placeholder='Հեռախոսահամար'
                            className='tel_input'
                            value={telNumber}
                            onChange={handleChange(setTelNumber)}
                        />

                        <p className={telNumberValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Հեռախոսահամարի դաշտը դատարկ է
                            </span>
                        </p>

                        <textarea
                            name="service_name"
                            cols="30"
                            rows="10"
                            placeholder='Ծառայության անվանումը'
                            className='service_name_input'
                            value={serviceName}
                            onChange={handleChange(setServiceName)}
                        ></textarea>

                        <p className={serviceNameValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Ծառայության անվանման դաշտը դատարկ է
                            </span>
                        </p>
                    </div>

                    <div className='order_call_btn_div'>
                        <button
                            className='order_call_btn'
                            onClick={(evt) => {
                                evt.preventDefault();
                                SendMessage(evt);
                                // setOrderCall(!orderCall);
                            }}
                        >ՊԱՏՎԻՐԵԼ</button>
                    </div>


                </div>

            </div>

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
                        <button
                            className='services_button'
                            onClick={(evt) => {
                                evt.preventDefault();
                                setOrderCall(!orderCall);
                            }}
                        >
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
                        <button
                            className='services_button'
                            onClick={(evt) => {
                                evt.preventDefault();
                                setOrderCall(!orderCall);
                            }}
                        >
                            ՊԱՏՎԻՐԵԼ ԶԱՆԳ
                        </button>
                    </div>
                </div>

            </aside>

        </article>
    )
}