import PopUserSet from "../PopUser/PopUserSet/PopUserSet.jsx";
import {SHeader, SHeaderBlock, SHeaderButtonMainNew, SHeaderLogo, SHeaderNav} from "./Header.styled.js";
import {Container} from "../../GlobalStyle.js";

import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleNewCard = () => {
        navigate("/card/add")
        console.log(handleNewCard)
    }

    return (
        <SHeader>
            <Container>
                <SHeaderBlock>
                    <SHeaderLogo>
                        <a href="" target="_self"><img src="/public/images/logo.png"/></a>
                    </SHeaderLogo>
                    <SHeaderLogo>
                        <a href="" target="_self"><img src="/public/images/logo_dark.png" alt="logo"/></a>
                    </SHeaderLogo>
                    <SHeaderNav>
                        <SHeaderButtonMainNew onClick={handleNewCard}>
                            Создать новую задачу
                        </SHeaderButtonMainNew>
                        <PopUserSet/>
                    </SHeaderNav>
                </SHeaderBlock>
            </Container>
        </SHeader>
    )
}

export default Header;