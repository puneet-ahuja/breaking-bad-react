import React from "react";
import Header from "./header";
import Season from './season.js'
// import Footer from "./footer";
// import ContentArea from "./content-area";
// import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
            let json = this.responseText;
            console.log(json);
            debugger;
            }
        };
        xhttp.open("GET", "http://localhost:3001/homepage", true);
        xhttp.send();

    }
    render(){
        
        let seasons = [];

        let seasonTiles = seasons.map((season => <Season url={season.url} title={season.title} />));

        let description = "";

        let homepageInfo = {};

        return(
            <div className="container">
                <Header headerUrl={homepageInfo.headerUrl}/>
                <h1>Breaking Bad</h1>
                <p>{description}</p>
                {seasonTiles}
           </div>
        );            
        
    }
}

export default Homepage;