import React, { useState } from 'react'
import  './header.scss'
import { Link } from 'react-router-dom'

interface HeaderProps{
    isActive: boolean,
    toggleIsActive: ()=> void,
}

export function Header({ isActive, toggleIsActive }: HeaderProps){

    // const [isActive, setIsActive] = useState<boolean>(false);
    // const handleClick = () => {
    //     setIsActive(!isActive);
    //   };

    return(
        <>  
            <div className="header">
                <div className={`logo ${isActive? 'active': ''}`}>
                    <div className="img">
                          <img src={require('../../img/Ellipse 26 (2).png')} alt="" />
                    </div>
                    <div className="img">
                    <img src={require('../../img/NFT.png')} alt="" />
                    </div>
                </div>
                <div className="nav">
                    <div onClick={toggleIsActive} className={`burger ${isActive? 'active': ''}`}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`nav__content ${isActive? 'heigth': ''}`}>
                           <div className="nav__list">
                        <div className="item">Главная</div>
                        <Link className='link' to="/smile" style={{ textDecoration: 'none' }}><div className="item">Что даст обучение</div>
                        </Link>
                    </div>
           
                    <div className="accountbtn">
                                Личный кабинет  
                    </div>
                    </div>
                 
                </div>
            </div>

        </>
    )
}