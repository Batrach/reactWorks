import React, {useState} from 'react'
import  {Header}  from './header/header'
import { Content } from './content/Content'
import { Modal } from './modal/Modal';

export function Main(){
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => {
        setIsActive(!isActive);
    };

    const [isModal, setIsModal] = React.useState(false);

    const handleClick = () => {
        setIsModal(!isModal);
    }
    return(
        <>
        <Modal isModal={isModal} handleClick={handleClick}/>
        <div  className={`container ${isModal? 'blur': ''}`}>
                <Header isActive={isActive} toggleIsActive={toggleIsActive}/>
                <Content isActive={isActive} isModal={isModal} handleClick={handleClick}/>
        </div>
        
        </>
    )
}