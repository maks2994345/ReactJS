import Card from "../Card/Card.jsx";
import {SColumnTitle, SMainColumn} from "./Column.styled.js";

function Column({title, cards}) {
    return (
        <SMainColumn>
            <SColumnTitle>
                <p>{title}</p>
            </SColumnTitle>
            {
                cards.map((item) => {
                    return (
                        <Card key={item.id} theme={item.theme} title={item.title} date={item.date}/>
                    )
                })
            }
        </SMainColumn>
    )
}

export default Column