import React from "react";
import '../../App.css'
import briefcase from './assets/brief-case.png'
import tree from './assets/tree.png'


function Logo(){
     
    return(
          
        <div className="logo"> 
            <div className="image">
                <img src={tree} alt="description" />
             </div>
               <h1>Far Away</h1>   
             <div className="image">
             <img src={briefcase} alt="description" />
             </div>
             
                
        </div>
  
    )
}

export default Logo;