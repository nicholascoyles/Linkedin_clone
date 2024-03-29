import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";

function Sidebar() {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className="sidebar__avatar" / >
                <h2>Nicholas Coyles</h2>
                <h4>nicholascoyles29@gmail.com</h4>    
            </div>      

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div> 
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('test')}
                {recentItem('test')}
                {recentItem('test')}
                {recentItem('test')}
            </div>
        </div>
    );
}

export default Sidebar;