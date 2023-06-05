import React from "react"
import {MdOutlineGroups,} from 'react-icons/md';
import {FaVimeoV,} from 'react-icons/fa';
import {FaPlayCircle} from 'react-icons/fa';




export default function ContentLeft(){
    
    return(
        <section className="flex-1">
           
            <h2 className="text-2xl  pl-[30px] pt-5 text-white my-8">Welcome Back Aditya!</h2>

            <div className="flex flex-row space-x-4">
                <Card 
                bgColor={"bg-lime-400"}
                txtColor={"text-white"} 
                icon={<MdOutlineGroups size={40}/>} 
                label={
                <span className="text-sm">
                    Team
                </span>
            }
            />
             <Card 
                bgColor={"bg-cyan-500"}
                txtColor={"text-white"} 
                icon={<FaPlayCircle size={40}/>} 
                label={
                <span className="text-sm">
                    Drakor
                </span>
            }
            />
             <Card 
                bgColor={"bg-fuchsia-600"}
                txtColor={"text-white"} 
                icon={<FaVimeoV size={40}/>} 
                label={
                <span className="text-sm">
                    Anime
                </span>
            }
            />
           </div>
        </section>
        
    );
}

function Card(props){
    return(
        <div className={`rounded ${props.txtColor} ${props.bgColor} bg-opacity-10 p-5 w-64 h-48 ml-10 space-y-4`}>
    <div>{props.icon}</div>
    <div>{props.label}</div>
       
    </div>

    );
}