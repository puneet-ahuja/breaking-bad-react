import React from "react";
import Episode from './episode-component';
import {Link,Route} from 'react-router-dom';

class SeasonDetails extends React.Component{
    
    constructor(props){
        debugger;
        super(props);

        //Season id from url
        this.seasonId = this.props.match.params.seasonId;
        this.currentUrl = props.match.url;

        this.state={
            title : "",
            episodes : []

        };
    }

    componentWillMount(){
        getSeasonDetail(this.seasonId).then(data=>{
                
                var dataJSON = JSON.parse(data);
                this.setState({
                    title : dataJSON.title,
                    episodes : dataJSON.episodes
                });
            
        }).catch(err=>alert(err));

        
        
    }



    render(){
        debugger;

        let episodes = this.state.episodes.map((episode)=><Episode key={episode.id} url={episode.url} title={episode.title} />);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <hr />
                <div id="search-container">
                    <Route exact path="/:seasonId" render={()=>{
                        return (
                            <Link  to={`${this.currentUrl}/search`} >
                                <img id="search-episode" src="https://imageog.flaticon.com/icons/png/512/61/61088.png"></img>
                            </Link>
                        )
                    }}></Route>
                    <Route exact path="/:seasonId/search" render={()=>{
                        return (
                            <div className="search-wrapper">
                                <form>
                                <input type="text" name="focus" required className="search-box" placeholder="Enter search term" />
                                    <button className="close-icon" type="reset"></button>
                                    <button  type="submit">Search</button>
                                </form>
                            </div>
                        )
                    }}></Route>
                
                
                </div>
                {episodes}
            </div>
            )    
    }

}

function getSeasonDetail(seasonId){

             return new Promise(function(resolve, reject){
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(xhttp.responseText);
                }
                };
                xhttp.open("GET", "http://localhost:3001/" + seasonId, true);
                xhttp.send();
            });

            
        
    }

export default SeasonDetails;