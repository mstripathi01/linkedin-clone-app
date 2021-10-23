import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading,subtitle)=> {
        <div className="widgets__article">
            <div className = "widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                
            </div>
        </div>

    };

    return (
        <div className="widgets">
            <div className = "widgets__header">
             <h2>Linked News</h2>
             <InfoIcon />
             {newsArticle("PAPA React is back", "Top news - 9099 readers")}
             {newsArticle("PAPA React is back", "Top news - 886 readers")}
             {newsArticle("PAPA React is back", "Top news - 202 readers")}
             </div>     
            
        </div>
    );
}

export default Widgets;
