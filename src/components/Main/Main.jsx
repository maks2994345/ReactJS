import Column from "../Column/Column.jsx";
import {statusList} from "../../data/statusList.js";
import {SMain, SMainBlock, SMainContent} from "./Main.styled.js";
import {Container} from "../../GlobalStyle.js";

function Main({cards}) {
    return (
        <SMain>
            <Container>
                <SMainBlock>
                    <Container>
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
                    </Container>
                </SMainBlock>
            </Container>
        </SMain>

    )
}

export default Main;