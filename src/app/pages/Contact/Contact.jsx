import { useState } from 'react';
import contact_map from '../../images_icons/contact_map.png';
import './Contact.scss';


export default function Contact() {

    const valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [messageValid, setMessageValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);

    const [messageValue, setMessageValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [nameValue, setNameValue] = useState("");


    const [popUp, setPopUp] = useState(false);


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    function SendMessage(evt) {
        evt.preventDefault();

        setEmailValid(!(emailValue.match(valid_email) && emailValue !== ""));
        setMessageValid(messageValue === "");
        setNameValid(nameValue === "");

        const data = {
            name: nameValue,
            email: emailValue,
            message: messageValue
        }

        if (
            emailValue.match(valid_email) &&
            messageValue &&
            nameValue
        ) {

            // API


            setMessageValue("");
            setEmailValue("");
            setNameValue("");
            setPopUp(!popUp);
        }

    }


    return (
        <article className='contact_main'>

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
                    <p className='popup_text'>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</p>
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

            <div className='contact_main_elements'>

                <aside className='contact_left_part'>
                    <div className='contact_left_part_text_div'>
                        <p className='contact_left_part_text'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                        </p>
                    </div>

                    <div className='contact_left_part_map_and_decor'>

                        <img src={contact_map} alt="contact map" className='contact_map' />

                        <svg width="311" height="274" viewBox="0 0 311 274" fill="none" xmlns="http://www.w3.org/2000/svg" className='contact_map_decor'>
                            <path d="M255.411 273.993C276.938 255.841 293.115 232.168 302.205 205.518C311.295 178.867 312.955 150.243 307.008 122.72C301.06 95.1969 287.729 69.8132 268.445 49.2939C249.161 28.7746 224.653 13.8945 197.552 6.25101C170.451 -1.39247 141.78 -1.51074 114.616 5.90891C87.4527 13.3286 62.8228 28.0059 43.3705 48.3655C23.9182 68.725 10.378 93.9979 4.20339 121.471C-1.97121 148.944 -0.54705 177.58 8.32299 204.305L57.5194 187.977C51.6149 170.187 50.6669 151.125 54.7771 132.838C58.8873 114.55 67.9005 97.7265 80.8491 84.174C93.7978 70.6215 110.193 60.8513 128.274 55.9124C146.356 50.9734 165.441 51.0521 183.482 56.1401C201.522 61.2281 217.836 71.1331 230.672 84.792C243.509 98.4509 252.383 115.348 256.342 133.669C260.301 151.99 259.196 171.043 253.145 188.784C247.094 206.524 236.326 222.282 221.996 234.365L255.411 273.993Z" fill="url(#paint0_linear_19_162)" />
                            <defs>
                                <linearGradient id="paint0_linear_19_162" x1="273.993" y1="55.5247" x2="36.9432" y2="255.411" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0A561A" />
                                    <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                </aside>

                <aside className='contact_right_part'>
                    <h2 className='contact_right_part_title'>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h2>
                    <div className='contact_right_part_contact_div'>

                        <input
                            type="text"
                            placeholder='Անուն'
                            className='contact_right_part_input'
                            value={nameValue}
                            onChange={handleChange(setNameValue)}
                        />

                        <p className={nameValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Անվան դաշտը դատարկ է
                            </span>
                        </p>

                        <input
                            type="text"
                            placeholder='Էլ․հասցե'
                            className='contact_right_part_input'
                            value={emailValue}
                            onChange={handleChange(setEmailValue)}
                        />

                        <p className={emailValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Էլ․ հասցեն սխալ է
                            </span>
                        </p>

                        <textarea
                            name="message"
                            id="message_textarea"
                            cols="30"
                            rows="10"
                            placeholder='Հաղորդագրություն'
                            className='contact_right_part_textarea'
                            value={messageValue}
                            onChange={handleChange(setMessageValue)}
                        ></textarea>

                        <p className={messageValid ? 'invalid_text' : 'valid_text'}>
                            <span className='invalid_valid_text'>
                                Հաղորդագրության դաշտը դատարկ է
                            </span>
                        </p>

                    </div>

                    <button
                        className='contact_right_part_snd_msg_button'
                        onClick={(evt) => { SendMessage(evt) }}
                    >ՈՒՂԱՐԿԵԼ</button>

                </aside>
            </div>

        </article>
    )
}