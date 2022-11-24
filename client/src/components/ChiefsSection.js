import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Michael Okoe",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Ghanaian",
        },
        {
            name: "Prince Kumabio",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Ghanaian",
        },
        {
            name: "Keziah A. Okyere",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Ghanaian",
        },
        {
            name: "Ibrahim Abdullai",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Ghanaian"
        },
        {
            name: "Blake Lively",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}