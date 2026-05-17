import AuthForm from "../AuthForm/AuthForm.jsx";
import {useState} from "react";

const SignUp = ({setIsAuth}) => {
    const [isSignUp, setIsSignUp] = useState(true)

    return <AuthForm setIsAuth={setIsAuth} isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>

}

export default SignUp