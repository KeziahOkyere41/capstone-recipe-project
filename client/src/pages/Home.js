import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";


export default function Home({ recipes, user }){
    console.log(user)
    return (
      <>
        {!user? (
          <div>
            <HeroSection recipes={recipes}/>
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
          </div>
        ):(
          <div>
            <h1>Welcome, {user.name}!</h1>
            <HeroSection recipes={recipes}/>
            {/*<ImproveSkills />*/}
            <QouteSection />
            <ChiefsSection />
        </div>
        )}
    </>
    )
}
