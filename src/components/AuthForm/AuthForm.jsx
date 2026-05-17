import {Link, useNavigate} from "react-router-dom";
import {
    Modal,
    ModalBlock,
    ModalButtonEnter, ModalButtonSignUp, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTitle,
    SSignInContainer, SSignUpContainer
} from "./AuthFormStyled.js";

function AuthForm({setIsAuth, isSignUp}) {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/")
    }

    return (
        <>
            {
                isSignUp && (
                    <SSignUpContainer>
                        <Modal>
                            <ModalBlock>
                                <ModalTitle>
                                    <h2>Регистрация</h2>
                                </ModalTitle>
                                <ModalFormLogin id="formLogUp" action="#">
                                    <ModalInput
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder="Имя"
                                    />
                                    <ModalInput
                                        type="text"
                                        name="login"
                                        id="loginReg"
                                        placeholder="Эл. почта"
                                    />
                                    <ModalInput
                                        type="password"
                                        name="password"
                                        id="passwordFirst"
                                        placeholder="Пароль"/>
                                    <ModalButtonSignUp>
                                        <a onClick={handleSignIn}>Зарегистрироваться</a>
                                    </ModalButtonSignUp>
                                    <ModalFormGroup>
                                        <p>Уже есть аккаунт?  <Link to="/sign-in">Войдите здесь</Link></p>
                                    </ModalFormGroup>
                                </ModalFormLogin>
                            </ModalBlock>
                        </Modal>
                    </SSignUpContainer>
                )
            }

            {
                !isSignUp && (
                    <SSignInContainer>
                        <Modal>
                            <ModalBlock>
                                <ModalTitle>
                                    <h2>Вход</h2>
                                </ModalTitle>
                                <ModalFormLogin id="formLogIn" action="#">
                                    <ModalInput
                                        type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Эл. почта"
                                    />
                                    <ModalInput
                                        type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"
                                    />
                                    <ModalButtonEnter>
                                            <a onClick={handleLogin}>Войти</a>
                                    </ModalButtonEnter>
                                    <ModalFormGroup>
                                        <p>Нужно зарегистрироваться?</p>
                                        <Link to="/sign-up">Регистрируйтесь здесь</Link>
                                    </ModalFormGroup>
                                </ModalFormLogin>
                            </ModalBlock>
                        </Modal>
                    </SSignInContainer>
                )
            }
        </>
    )

    //return (
    //         <SSignUpContainer>
    //             <Modal>
    //                 <ModalBlock>
    //                     <ModalTitle>
    //                         <h2>Регистрация</h2>
    //                     </ModalTitle>
    //                     <ModalFormLogin id="formLogUp" action="#">
    //                         <ModalInput
    //                             type="text"
    //                             name="first-name"
    //                             id="first-name"
    //                             placeholder="Имя"
    //                         />
    //                         <ModalInput
    //                             type="text"
    //                             name="login"
    //                             id="loginReg"
    //                             placeholder="Эл. почта"
    //                         />
    //                         <ModalInput
    //                             type="password"
    //                             name="password"
    //                             id="passwordFirst"
    //                             placeholder="Пароль"/>
    //                         <ModalButtonSignUp>
    //                             <a>Зарегистрироваться</a>
    //                         </ModalButtonSignUp>
    //                         <ModalFormGroup>
    //                             <p>Уже есть аккаунт? <a onClick={handleSignIn}>Войдите здесь</a></p>
    //                         </ModalFormGroup>
    //                     </ModalFormLogin>
    //                 </ModalBlock>
    //             </Modal>
    //         </SSignUpContainer>
    //     )
}

export default AuthForm;