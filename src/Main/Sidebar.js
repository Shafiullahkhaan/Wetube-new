import React from "react";

export default function(){
    const sideMenu = [
        {text:"Home", icon:"fas fa-home"},
        {text:"Explore", icon:"fa-regular fa-compass"},
        {text:"Shorts", icon:"fa-solid fa-video"},
        {text:"Library", icon:"fa-solid fa-tv"},
        {text:"Subscriptions", icon:"fas fa-bookmark"},
    ]
    return (
        <div className="sidebar">
                <ul className="menu-group">
                {sideMenu.map(menu =>(
                    <li className="menu-items">
                        <i className={menu.icon}></i>
                        <div className="text">{menu.text}</div>
                    </li>))}
                </ul>
        </div>
    )
}