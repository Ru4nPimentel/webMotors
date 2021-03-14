import React from 'react';
import { BiMap } from 'react-icons/bi';
import './CardCar.scss';

const CardCar = ({ cardArray, styleComponents }) => {
  return (
    <div className={styleComponents ? `CardCar ${styleComponents}` : `CardCar`}>
      {cardArray.map((card, index) => {
        return (
          <div
            className="cardCar_box"
            key={card.ID}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="cardCar_img">
              <img src={card.Image} alt="carro" />
            </div>
            <div className="cardCar_info">
              <div className="name_car">
                <b>{card.Model}</b>
                <span>{card.Version}</span>
              </div>
              <div className="price_car">
                <b>
                  R$
                  {parseInt(card.Price).toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </b>
              </div>
              <div className="year_car">
                <span>
                  {card.YearFab} / {card.YearModel}
                </span>
                <span>
                  {card.KM.toString().replace(/(\d{3}$)/gm, '\n.$1')}
                  km
                </span>
              </div>
            </div>
            <div className="cardCar_address">
              <BiMap />
              <span>São Paulo - SP</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCar;
