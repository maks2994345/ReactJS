import './App.css'
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import Header from "./components/Header/Header.jsx";
import PopExit from "./components/PopUser/PopExit/PopExit.jsx";
import Main from "./components/Main/Main.jsx";
import {cardList} from "./data/data.js";
import {useState} from "react";
import Loader from "./Loader/Loader.jsx";
import {GlobalStyle} from "./GlobalStyle.js";



function App() {

    const [loading, setLoading] = useState(false);

    // setTimeout(() => {
    //     setLoading(false);
    // }, 3000)

    return (
        <>
            <GlobalStyle />
            <div className="wrapper">
                <PopExit/>
                <PopBrowse/>
                <PopNewCard/>
                <Header/>
                {
                    loading
                        ? <Loader/>
                        : <Main cards={cardList}/>
                }
            </div>
        </>
    )
}

export default App
