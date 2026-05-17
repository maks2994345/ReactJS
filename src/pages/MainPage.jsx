import {GlobalStyle, Wrapper} from "../GlobalStyle.js";
import Header from "../components/Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import Main from "../components/Main/Main.jsx";
import {Outlet} from "react-router-dom";

const MainPage = ({loading, cards}) => {
    return (
        <>
            <Wrapper>
                <GlobalStyle/>
                <Header/>
                {
                    loading
                        ? <Loader/>
                        : <Main cards={cards} loading={loading}/>
                }
                <Outlet/>
            </Wrapper>
        </>
    )
}

export default MainPage;

