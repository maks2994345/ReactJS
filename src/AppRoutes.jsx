import {cardList} from "./data/data.js";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import NewCardPage from "./pages/NewCardPage.jsx";
import PopBrowsePage from "./pages/PopBrowsePage.jsx";
import PopExitPage from "./pages/PopExitPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import Page404 from "./pages/Page404.jsx";

function AppRoutes(){

    const [isAuth, setIsAuth] = useState(false);

    const [loading, setLoading] = useState(false);


    // setTimeout(() => {
    //     setLoading(false);
    // }, 3000)

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path="/" element={<MainPage cards={cardList} loading={loading}/>}>
                    <Route path="/card/add" element={<NewCardPage/>}/>
                    <Route path="/card/:id" element={<PopBrowsePage/>}/>
                    <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth}/>}/>
                </Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth}/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}

export default AppRoutes;