import {
    SPopExit,
    SPopExitBlock,
    SPopExitBlockTitle, SPopExitButtonNo, SPopExitButtonYes,
    SPopExitContainer,
    SPopExitForm,
    SPopExitFormGroup
} from "./PopExit.styled.js";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function PopExit({setIsAuth}) {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        setIsAuth(false);
        navigate("/sign-in")
    }

    const [isOpen, setIsOpen] = useState(false);

    return(
        <SPopExit>
            <SPopExitContainer>
                <SPopExitBlock>
                    <SPopExitBlockTitle>
                        <h2>Выйти из аккаунта?</h2>
                    </SPopExitBlockTitle>
                    <SPopExitForm>
                        <SPopExitFormGroup>
                            <SPopExitButtonYes onClick={handleLogout}>
                                <a>Да, выйти</a>
                            </SPopExitButtonYes>
                            <SPopExitButtonNo>
                               <Link to="/"><a>Нет, остаться</a></Link>
                            </SPopExitButtonNo>
                        </SPopExitFormGroup>
                    </SPopExitForm>
                </SPopExitBlock>
            </SPopExitContainer>
        </SPopExit>
    )
}

export default PopExit;