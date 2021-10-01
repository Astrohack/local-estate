import React, {useContext, useState} from "react";

import "../styles/LanguageSelector.css"

import { LanguageContext } from "../context/language-context";
import flag_en from "../flag-en.png"
import flag_es from "../flag-es.png"


function LanguageSelector () {

    const {userLanguage, userLanguageChange } = useContext(LanguageContext)
    const handleLanguageChange = (e, newLang) => userLanguageChange(newLang)

    return (
        <div className="language-container" >
            <div className="navLangButton" onClick={e => handleLanguageChange(e, 'en')}>
                <img src={flag_en} alt="en"/>
            </div>
            <div className="navLangButton" onClick={e => handleLanguageChange(e, 'es')}>
                <img src={flag_es} alt="es"/>
            </div>
        </div>
    );
}

export default LanguageSelector