import SignIn from "../components/SignInSignUp/SignIn.jsx";

const SignInPage = ({setIsAuth}) => {
    return <SignIn setIsAuth={setIsAuth} isSignUp={false}/>;
}

export default SignInPage