import React, { useState } from "react";

import {en} from "../locales/en/translation.json";
import {es} from "../locales/es/translation.json";

export const dictionaryList = { en, es }

export const languageOptions = {
    en: "English",
    es: "Espanol",
  };

export const LanguageContext = React.createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en,   
  });

  export function LanguageProvider({children}){
    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en')

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected =>{
            const newLanguage = languageOptions[selected] ? selected: 'en'
            setUserLanguage(newLanguage)
            window.localStorage.setItem('rcml-lang', newLanguage);
        }
        
    }
    return (
        <LanguageContext.Provider value={provider}>
          {children}
        </LanguageContext.Provider>
      );
  }