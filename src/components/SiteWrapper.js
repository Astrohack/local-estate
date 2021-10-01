import MainSite from './MainSite';
import HowItWorksPage from './HowItWorksPage';
import ContactSite from './ContactSite';
import GallerySite from './GallerySite';
import PhotoshotServicesSite from './PhotoshotServicesSite';
import Text from './TranslatedText';
import Header from './Header';
import SearchPanel from './SearchPanel';

import  room_background from "../room_background.jpg"
import  kredens_background from "../kredens.jpg"
import  office_background from "../office.jpg"
import  salon from "../salon.jpg"


import  SiteHeader from './SiteHeader'
import { Switch, Route, } from "react-router-dom"


function SiteWrapper() {
  return ( 
    <div >
      <SiteHeader />
      <Switch>
          <Route path="/main">
            <MainSite background={room_background}>
                <Header title="lets-start" content={<SearchPanel/>}/>
            </MainSite>
          </Route>
          <Route path="/gallery">
            <MainSite background={kredens_background}>
                <Header title="gallery" content="see-our-work"/>
            </MainSite>
            <GallerySite/>
          </Route>
          <Route path="/contact">
             <MainSite background={office_background}>
               <Header title="contact" content=""/>
            </MainSite>
            <ContactSite/>
          </Route>
          <Route path="/photoshot">
            <PhotoshotServicesSite/>
          </Route>
          <Route path="/how-it-works">
          <MainSite background={salon}>
               <Header title="how-it-works" content="hiw-desc"/>
            </MainSite>
            
            <HowItWorksPage/>
          </Route>
          
          
      </Switch>


    </div>
  );
}

export default SiteWrapper;