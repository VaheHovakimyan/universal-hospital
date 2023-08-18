import HomeContact from './HomeComps/HomeContact/HomeContact';
import HomeMedicalSterilization from './HomeComps/HomeMedicalSterilization/HomeMedicalSterilization';
import HomePartners from './HomeComps/HomePartners/HomePartners';
import HomeProduct from './HomeComps/HomeProduct/HomeProduct';
import HomeWelcome from './HomeComps/HomeWelcome/HomeWelcome';



export default function Home() {
    return (
        <>
            <HomeWelcome />

            <HomeProduct />

            <HomeMedicalSterilization />

            <HomePartners />

            <HomeContact />
        </>
    )
}