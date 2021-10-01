import  SiteWrapper from './components/SiteWrapper'
import { BrowserRouter as Router,  } from "react-router-dom";
import { LanguageProvider } from './context/language-context';

process.env.REACT_APP_GOOGLE_API_KEY = "AIzaSyC7cgpygEzQcu0ck3tI6b4anIk4E6PsUlg"

function App() {
  return ( 
    <Router>
      <LanguageProvider>  
        <SiteWrapper/>
     </LanguageProvider>
    </Router>
    
  );
}

export default App;
