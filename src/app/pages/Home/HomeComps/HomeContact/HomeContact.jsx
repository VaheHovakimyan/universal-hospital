import contact_map from '../../../../images_icons/contact_map.png';
import './HomeContact.scss';




export default function HomeContact() {
    return (
        <article className='home_contact_main'>

            <div className='home_contact_main_elements'>

                <aside className='home_contact_left_part'>
                    <div className='home_contact_left_part_text_div'>
                        <p className='home_contact_left_part_text'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                        </p>
                    </div>

                    <div className='home_contact_left_part_map_and_decor'>

                        <img src={contact_map} alt="contact map" className='home_contact_map' />

                        {/* <svg width="311" height="274" viewBox="0 0 311 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M255.411 273.993C276.938 255.841 293.115 232.168 302.205 205.518C311.295 178.867 312.955 150.243 307.008 122.72C301.06 95.1969 287.729 69.8132 268.445 49.2939C249.161 28.7746 224.653 13.8945 197.552 6.25101C170.451 -1.39247 141.78 -1.51074 114.616 5.90891C87.4527 13.3286 62.8228 28.0059 43.3705 48.3655C23.9182 68.725 10.378 93.9979 4.20339 121.471C-1.97121 148.944 -0.54705 177.58 8.32299 204.305L57.5194 187.977C51.6149 170.187 50.6669 151.125 54.7771 132.838C58.8873 114.55 67.9005 97.7265 80.8491 84.174C93.7978 70.6215 110.193 60.8513 128.274 55.9124C146.356 50.9734 165.441 51.0521 183.482 56.1401C201.522 61.2281 217.836 71.1331 230.672 84.792C243.509 98.4509 252.383 115.348 256.342 133.669C260.301 151.99 259.196 171.043 253.145 188.784C247.094 206.524 236.326 222.282 221.996 234.365L255.411 273.993Z" fill="url(#paint0_linear_19_162)" />
                            <defs>
                                <linearGradient id="paint0_linear_19_162" x1="273.993" y1="55.5247" x2="36.9432" y2="255.411" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0A561A" />
                                    <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg> */}

                    </div>

                </aside>

                <aside className='home_contact_right_part'>
                    <h2 className='home_contact_right_part_title'>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h2>
                    <div className='home_contact_right_part_contact_div'>
                        <input type="text" placeholder='Անուն' className='home_contact_right_part_input' />
                        <input type="text" placeholder='Էլ․հասցե' className='home_contact_right_part_input' />
                        <textarea name="message" id="message_textarea" cols="30" rows="10" placeholder='Հաղորդագրություն' className='home_contact_right_part_textarea'></textarea>
                    </div>
                    <button className='home_contact_right_part_snd_msg_button'>ՈՒՂԱՐԿԵԼ</button>

                </aside>
            </div>

        </article>
    )
}