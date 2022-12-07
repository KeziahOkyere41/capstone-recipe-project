import { useNavigate } from  'react-router-dom'



export default function ImproveSkills(){
    const navigate = useNavigate();
    const list = [
        "Learn new recipes",
        "Write your own recipes",
        "Get cooking tips",
        "Search for recipes",
        "Share recipes",
        "Get ranked"
    ]
    
    function handleClick(){
      navigate("/signup")
    }

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Cooking Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button onClick={handleClick} className="btn">signup now</button>
            </div>
        </div>
    )
}
