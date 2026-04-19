import Card from "../Card/Card.jsx";
import card from "../Card/Card.jsx";

function Column({title, cards}) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            {
                cards.map((item) => {
                    return (
                        <Card key={item.id} theme={item.theme} title={item.title} date={item.date} topic={item.topic}/>
                    )
                })
            }
        </div>
    )
}

export default Column