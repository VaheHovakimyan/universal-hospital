import home_medical_ster_img from '../../../../images_icons/home_medical_ster_img.png';
import './HomeMedicalSterilization.scss';



export default function HomeMedicalSterilization() {
    return (
        <article className="home_medical_ster_main_flex">
            <div className='home_medical_ster_main'>

                <aside className="home_medical_ster_text_and_button">
                    <h2 className='home_medical_ster_title'>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
                    <p className='home_medical_ster_text'>Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում</p>

                    <button className='home_medical_ster_see_more_button'>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>

                </aside>
                <aside className="home_medical_ster_img_div">
                    <img src={home_medical_ster_img} alt="medical_ster_img" />
                </aside>
            </div>
        </article>
    )
}