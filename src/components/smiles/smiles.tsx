import React from "react";
import "./smiles.scss";

export function Smiles() {
  return (
    <>
      <div className="smiles">
        <div className="backgroundimages">
        <div className="smiles__wrapper">
          <h1 className="title">Что даст тебе обучение?</h1>
          <div className="row">
            <div className="block">
              <div className="block__content">
                <div className="image">
                  <img src={require("../../img/smiles/smile1.png")} alt="" />
                </div>
                <div className="info">
                  Откроешь свой первый криптокошелек и научишься с ним работать
                </div>
              </div>
              <div className="bottom"></div>
            </div>
            <div className="block">
              <div className="block__content">
                <div className="image">
                  <img src={require("../../img/smiles/smile2.png")} alt="" />
                </div>
                <div className="info">
                  Поймёшь, как выбирать правильные дропы
                </div>
              </div>
              <div className="bottom"></div>
            </div>
            <div className="block">
              <div className="block__content">
                <div className="image">
                  <img src={require("../../img/smiles/smile3.png")} alt="" />
                </div>
                <div className="info">
                  Построишь план по быстрому приумножению заработанных средств
                </div>
              </div>
              <div className="bottom"></div>
            </div>
            <div className="block">
              <div className="block__content">
                <div className="image">
                  <img src={require("../../img/smiles/smile4.png")} alt="" />
                </div>
                <div className="info">Узнаешь кто такие холдеры и флипперы</div>
              </div>
              <div className="bottom"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
