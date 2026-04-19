import './App.css'
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import Header from "./components/Header/Header.jsx";
import PopExit from "./components/PopUser/PopExit/PopExit.jsx";
import Main from "./components/Main/Main.jsx";


function App() {

    return (
        <>
            <div className="wrapper">
                <PopExit/>
                <PopBrowse/>
                <PopNewCard/>
                <Header/>
                <Main/>
            </div>
        </>
    )
}

export default App
