import CustomImage from "./CustomImage"
import { useNavigate } from  'react-router-dom'
export default function HeroSection({ recipes }){
    const navigate = useNavigate();
    const images = [...recipes];
    images.sort(() => 0.5 - Math.random());
    const recipeImages = images.slice(0, 6);
    function handleClick(){
      navigate("/recipes")
    }
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">DelicaciesCrib is a place where you can <i><b>pamper</b></i> your soul and tummy with delicious food recipes. And our service is absolutely free. So start exploring now.</p>
                <button className="btn" onClick={handleClick}>explore now</button>
            </div>
            <div className="col gallery">
                { recipeImages.map((src) => (
                    <CustomImage key={src.id} imgSrc={src.thumbnail} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}
