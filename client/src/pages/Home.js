import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";


export default function Home({ recipes }){
    return (
        <div>
            <HeroSection recipes={recipes}/>
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}
