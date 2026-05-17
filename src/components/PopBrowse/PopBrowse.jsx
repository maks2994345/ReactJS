import {
    SPopBrowse,
    SPopBrowseBlock,
    SPopBrowseContainer,
} from "./PopBrowse.styled.js";
import {useParams} from "react-router-dom";
import {useMemo} from "react";
import {cardList} from "../../data/data.js";
import PopBrowseCard from "./PopBrowseCard.jsx";

function PopBrowse() {
    const {id} = useParams();

    const word = useMemo(() => cardList.find(card => card.id === Number(id)), [id]);

    return (
        <SPopBrowse>
            <SPopBrowseContainer>
                <SPopBrowseBlock>
                    <PopBrowseCard word={word} />
                </SPopBrowseBlock>
            </SPopBrowseContainer>
        </SPopBrowse>
    )
}

export default PopBrowse