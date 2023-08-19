import lab_men_img from '../../images_icons/lab_man.png';
import './About.scss';




export default function About() {
    return (
        <article className='about_main'>
            <h1 className='about_title'>ՄԵՐ ՄԱՍԻՆ</h1>

            <aside className='lab_man_and_text_flex'>

                <div className='lab_man_and_text'>
                    <div className='lab_man_img_and_decor'>
                        <img src={lab_men_img} alt="lab_man_img" className='lab_man_img' />
                        <svg width="245" height="274" viewBox="0 0 245 274" fill="none" xmlns="http://www.w3.org/2000/svg" className='lab_man_img_decor'>
                            <path d="M189.411 273.993C210.938 255.841 227.115 232.168 236.205 205.518C245.295 178.867 246.955 150.243 241.008 122.72C235.06 95.1969 221.729 69.8132 202.445 49.2939C183.161 28.7746 158.653 13.8945 131.552 6.25101C104.451 -1.39247 75.7795 -1.51074 48.6161 5.90891C21.4527 13.3286 -3.17715 28.0059 -22.6295 48.3655C-42.0818 68.725 -55.622 93.9979 -61.7966 121.471C-67.9712 148.944 -66.547 177.58 -57.677 204.305L-8.48063 187.977C-14.3851 170.187 -15.3331 151.125 -11.2229 132.838C-7.11269 114.55 1.9005 97.7265 14.8491 84.174C27.7978 70.6215 44.1929 60.8513 62.2745 55.9124C80.3561 50.9734 99.4414 51.0521 117.482 56.1401C135.522 61.2281 151.836 71.1331 164.672 84.792C177.509 98.4509 186.383 115.348 190.342 133.669C194.301 151.99 193.196 171.043 187.145 188.784C181.094 206.524 170.326 222.282 155.996 234.365L189.411 273.993Z" fill="url(#paint0_linear_28_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_28_34" x1="207.993" y1="55.5247" x2="-29.0568" y2="255.411" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#009962" />
                                    <stop offset="1" stop-color="#009962" stop-opacity="0.54" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='lab_men_text'>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>

            </aside>

            <aside className='lab_gloves_main'>
                <div className='lab_gloves_text'>

                </div>
                <div className='lab_gloves_img_and_decor'>

                </div>
            </aside>

        </article>

    )
}