import PopUserSet from "../PopUser/PopUserSet/PopUserSet.jsx";
import {SContainer, SHeader, SHeaderBlock, SHeaderButtonMainNew, SHeaderLogo, SHeaderNav} from "./Header.styled.js";

function Header() {
    return (
        <SHeader>
            <SContainer>
                <SHeaderBlock>
                    <SHeaderLogo>
                        <a href="" target="_self"><img src="/public/images/logo.png"/></a>
                    </SHeaderLogo>
                    <SHeaderLogo>
                        <a href="" target="_self"><img src="/public/images/logo_dark.png" alt="logo"/></a>
                    </SHeaderLogo>
                    <SHeaderNav>
                        <SHeaderButtonMainNew>
                            <a href="#popNewCard">Создать новую задачу</a>
                        </SHeaderButtonMainNew>
                        <PopUserSet/>
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
        </SHeader>
    )
}

export default Header;