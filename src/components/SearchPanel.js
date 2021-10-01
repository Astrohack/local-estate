import "../styles/SearchPanel.css"
import Text from "./TranslatedText"
import SearchLocatoionInput from "./SearchLocatoionInput"

import { useContext } from "react";
import { LanguageContext, } from "../context/language-context";


export default function SearchPanel (){
    const languageContext = useContext(LanguageContext)
    return(
        <div className="search-wrapper">
            <div id="address" className="item">
                <div className="header"><Text tid="address"/></div>
                <SearchLocatoionInput placeholder={languageContext.dictionary["enter-city"]}/>
            </div>
            <div id="size" className="item">
                <div className="header"><Text tid="size"/></div>
                <input placeholder={languageContext.dictionary["enter-size"]}/>
            </div>
            <div id="type" className="item">
                <div className="header"><Text tid="type"/></div>
                <input  placeholder={languageContext.dictionary["enter-type"]}/>
            </div>
            <div id="start">Start</div>
        </div>
    )
}