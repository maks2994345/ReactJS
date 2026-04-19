import Column from "../Column/Column.jsx";
import {statusList} from "../../data/statusList.js";
import {cardList} from "../../data/data.js";

function Main({cards}) {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="container">
                        <div className="main__block">
                            <div className="main__content">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main;