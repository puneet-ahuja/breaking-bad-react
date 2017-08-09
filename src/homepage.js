import React from "react";
import Header from "./header";
import Season from './season.js'
// import Footer from "./footer";
// import ContentArea from "./content-area";
// import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Homepage extends React.Component{
    render(){
        let seasons = [{
            title : "Season 1",
            url : "https://latebreakingbad.files.wordpress.com/2013/02/breaking-bad-3-3-1.jpg",
            episodes : 7
        },{
            title : "Season 2",
            url : "http://digitalspyuk.cdnds.net/13/35/1600x800/landscape_ustv-breaking-bad-season-2-pictures-18.jpg",
            episodes : 7
        },{
            title : "Season 3",
            url : "https://www.wisecrack.co/wp-content/uploads/2015/11/BreakingBad-YT-Season3.jpg",
            episodes : 7
        },{
            title : "Season 4",
            url : "http://www.malcolminthemiddle.co.uk/gallery/data/988/Bryan-Cranston-Breaking-Bad-Season-2-Promo-MITMVC-4.jpg",
            episodes : 7
            
        },{
            title : "Season 5",
            url : "https://coverfiles.alphacoders.com/313/31393.jpg",
            episodes : 7
        }];

        let seasonTiles = seasons.map((season => <Season url={season.url} title={season.title} />));

        let description = "Breaking Bad is an American neo-western crime drama television series created and produced by Vince Gilligan. The show originally aired on the AMC network for five seasons, from January 20, 2008, to September 29, 2013. It tells the story of Walter White (Bryan Cranston), a struggling high school chemistry teacher diagnosed with inoperable lung cancer. Together with his former student Jesse Pinkman (Aaron Paul), White turns to a life of crime, producing and selling crystallized methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal world. The title is from a Southern colloquialism meaning to raise hell.[5] Breaking Bad is set and was filmed in Albuquerque, New Mexico.";

        return(
            <div className="container">
                <Header/>
                <h1>Breaking Bad</h1>
                <p>{description}</p>
                {seasonTiles}
           </div>
        );            
        
    }
}

export default Homepage;