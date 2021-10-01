import { useContext } from "react";
import { LanguageContext, } from "../context/language-context";

export default function Text({tid}) {
    const languageContext = useContext(LanguageContext)
    return languageContext.dictionary[tid] || tid
}