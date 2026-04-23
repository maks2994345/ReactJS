import Column from "../Column/Column.jsx";
import {statusList} from "../../data/statusList.js";
import {SMain, SMainBlock, SMainContent} from "./Main.styled.js";

function Main({cards}) {
    return (
        <SMain>
            <div className="container">
                <SMainBlock>
                    <div className="container">
                        <SMainBlock>
                            <SMainContent>
                                {
                                    statusList.map((item, index) => {
                                        const filteredCards = cards.filter((card) => {
                                            return card.status === item
                                        })
                                        return (
                                            <Column title={item} key={index} cards={filteredCards}/>
                                        )
                                    })
                                }
                            </SMainContent>
                        </SMainBlock>
                    </div>
                </SMainBlock>
            </div>
        </SMain>

    )
}

export default Main;