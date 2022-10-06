import React from 'react'
import "./Header.css"
import {ReactComponent as ReactLogo} from "./logo.svg"
import {useState} from "react"
import data from "./data.json"


export const Header = () => {
    const [value, setValue] = useState("");

    const onChange = (event) =>{
        setValue(event.target.value)};
        
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // console.log(searchTerm) I tried my best to publish videos here but i ran out of time.
    };

    
    
  return (

    <div className='Header'>

        <div className='Header-left'>
            <i className="fas fa-bars"></i>
            <ReactLogo className='logo'/>
        </div>

        <div className='Header-center'>
               
            <div className='search'>
                
                <div>
                    <input type ="text" value={value} onChange={onChange} placeholder='search'  className='search-box'/>
                        <button onClick= {()=> onSearch(value)} className='search-btn'>
                            <i className='fas fa-search'></i>
                        </button>
                 </div>
             

                 <div className="dropdown">
            
                   {data.filter(item => {
                     const searchTerm = value.toLowerCase();
                     const vid = item.videoName.toLowerCase();
                      
                     return searchTerm && vid.startsWith(searchTerm) && vid !== searchTerm
                     }).slice(0,10)
                   
                     .map((item)=> (
                     <div onClick={()=>onSearch(item.videoName)} className="dropdown-row" key={item.id}>{item.videoName}
                     </div>)  )}

                </div>

             </div>

        </div>       

            
        <div className='Header-right'>
            <button className='create-btn'>
                <i class="fa-solid fa-video"></i>
            </button>
            <button className='notifications-btn'>
                <i className='far fa-bell'></i>
            </button>
            
        </div>
     </div>   
    
  
  )
}




               
               
               
                
