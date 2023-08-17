import HomeMedicalSterilization from './HomeComps/HomeMedicalSterilization/HomeMedicalSterilization';
import HomeProduct from './HomeComps/HomeProduct/HomeProduct';
import HomeWelcome from './HomeComps/HomeWelcome/HomeWelcome';



export default function Home() {
    return (
        <>
            <HomeWelcome />

            <HomeProduct />

            <HomeMedicalSterilization />
        </>
    )
}