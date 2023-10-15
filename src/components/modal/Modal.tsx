import react from 'react'
import './modal.scss'


interface ModalProps{
    isModal: boolean,
    handleClick: ()=> void,
}

export function Modal({isModal, handleClick}:ModalProps){
    
    return(
        <>
        <div  className={`modal ${isModal? '': 'none'}`}>
            <div className="content">
                <div className="close" onClick={handleClick}>&times;</div>
                <div className="background">
                <div className="content__title">
                Начни прямо сейчас!
                </div>
                <div className="content__text">
                Получи все нужные навыки для заработка на NFT всего за 28 дней!
                </div>
                <input type="text" />
                <a href="">Оплатить</a>
                </div>
            </div>
        </div>
        </>
    )
}