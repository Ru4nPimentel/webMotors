import React from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaCar } from 'react-icons/fa';

import Logo from '../../components/Logo/Logo';
import './SearchCar.scss';
import FormSearch from './FormSearch/FormSearch';

const SearchCar = () => {
  return (
    <section className="searchCar">
      <div className="search_container">
        <div className="search_box">
          <div className="search_logo">
            <Logo />
          </div>
          <div className="search_selectInfo">
            <div className="search_sellCar">
              <Link to="/" aria-label="Venda seu Carro" className="sellBtn">
                Vender meu carro
              </Link>
            </div>
            <div className="search_autoOption">
              <div className="optionCar">
                <FaCar />
                <p>
                  <span>Comprar</span>
                  <b>Carros</b>
                </p>
              </div>
              <div className="optionMoto">
                <FaMotorcycle />
                <p>
                  <span>Comprar</span>
                  <b>Motos</b>
                </p>
              </div>
            </div>
          </div>
          <FormSearch />
        </div>
      </div>
    </section>
  );
};

export default SearchCar;
