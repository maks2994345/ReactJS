import {useState} from "react";
import {
    SPopUserSet,
    SPopUserSetButton,
    SPopUserSetEmail,
    SPopUserSetName,
    SPopUserSetTheme
} from "./PopUserSet.styled.js";

function PopUserSet() {
    const [isVisible, setIsVisible] = useState(false);

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
                        <SPopUserSetButton>
                            <a href="#popExit">Выйти</a>
                        </SPopUserSetButton>
                    </SPopUserSet>
                ) : null
            }

        </>
    )
}

export default PopUserSet;