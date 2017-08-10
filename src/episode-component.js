import React from "react";
import {Link} from 'react-router-dom';

class Episode extends React.Component{
    render(){
        
        return (
            <div className="episode">
                <div className="episode-image-container">
                    <img  className="episode-image" src={this.props.url}
                        alt="img not available"
                        ></img>
                    {/*<Link to={`/season${this.props.id}`} className="episode-button" >Edit</Link>*/}
                </div>
                <h4>{this.props.title}</h4>
            
            </div>
        );
    }
}



export default Episode;