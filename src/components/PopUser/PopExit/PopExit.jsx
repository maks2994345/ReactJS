import {
    SPopExit,
    SPopExitBlock,
    SPopExitBlockTitle, SPopExitButtonNo, SPopExitButtonYes,
    SPopExitContainer,
    SPopExitForm,
    SPopExitFormGroup
} from "./PopExit.styled.js";

function PopExit(){
    return(
        <div className="pop-exit" id="popExit">
            <SPopExitContainer>
                <SPopExitBlock>
                    <SPopExitBlockTitle>
                        <h2>Выйти из аккаунта?</h2>
                    </SPopExitBlockTitle>
                    <SPopExitForm>
                        <SPopExitFormGroup>
                            <SPopExitButtonYes>
                                <a href="modal/signin.html">Да, выйти</a>
                            </SPopExitButtonYes>
                            <SPopExitButtonNo>
                                <a href="main.html">Нет, остаться</a>
                            </SPopExitButtonNo>
                        </SPopExitFormGroup>
                    </SPopExitForm>
                </SPopExitBlock>
            </SPopExitContainer>
        </div>
    )
}

export default PopExit;