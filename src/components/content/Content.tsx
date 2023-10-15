import React, {useState} from "react";
import "./contentmain.scss";


interface ContentProps{
    isActive: boolean,   
    isModal: boolean,
    handleClick: ()=>void 
}


export function Content({isActive, handleClick }:ContentProps){
    
    return(
        <>
          <div className={`wrapper ${isActive ? 'blur' : ''}`}>
        <div className="block">
            <h1 className="title">
            Не упусти <br/> возможность войти в <span>прибыльную нишу</span>
            </h1>
            <div className="text">
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </div>
            
            <button className="btn" onClick={handleClick}>
            Начать зарабатывать на NFT
            </button>
            
        </div>
        </div>
        </>
    )
}