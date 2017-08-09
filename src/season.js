import React from "react";
// import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Season extends React.Component{
    render(){
        return (
            <div className="season">
                <h1>{this.props.title}</h1>
                <div className="season-image-container">
                    <img  className="season-image" src={this.props.url}
                        alt="img not available"
                        ></img>
                    <div className="season-button">20 Episodes</div>
                </div>
            
            </div>
        );
    }
}



export default Season;