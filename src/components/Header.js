import "../styles/Header.css"
import Text from "./TranslatedText"
export default function Header({title, content}){
    return(
        <div className="title-container">
            <div className="title">{<Text tid={title}/>}</div>
            <div className="content">{<Text tid={content}/>}</div>
        </div>
    )
}