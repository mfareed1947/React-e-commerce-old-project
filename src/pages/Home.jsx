
import HeroSection from './HeroSection'
import Feature from '../Components/Feature'

const Home = () => {


    const data = {
        name: "jungle Store"
    }
    return <>
        
        <HeroSection data={data} />
        <Feature />
    </>
}



export default Home