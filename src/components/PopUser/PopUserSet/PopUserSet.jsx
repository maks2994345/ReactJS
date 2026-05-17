import {useState} from "react";
import {
    SPopUserSet,
    SPopUserSetButton,
    SPopUserSetEmail,
    SPopUserSetName,
    SPopUserSetTheme
} from "./PopUserSet.styled.js";
import {useNavigate} from "react-router-dom";

function PopUserSet() {
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/exit")
    }

    return (
        <>
            <a onClick={() => setIsVisible(!isVisible)} className="header__user _hover02">Ivan Ivanov</a>
            {
                isVisible ? (
                    <SPopUserSet>
                        <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
                        <SPopUserSetEmail>ivan.ivanov@gmail.com</SPopUserSetEmail>
                        <SPopUserSetTheme>
                            <p>Темная тема</p>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </SPopUserSetTheme>
                        <SPopUserSetButton onClick={handleExit}>
                            <a>Выйти</a>
                        </SPopUserSetButton>
                    </SPopUserSet>
                ) : null
            }

        </>
    )
}

export default PopUserSet;