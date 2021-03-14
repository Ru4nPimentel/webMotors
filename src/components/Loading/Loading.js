import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="load_box">
        <i className="load_icon"></i>
        <p className="load_text">
          Carregando
          <i></i>
          <i></i>
          <i></i>
        </p>
      </div>
    </div>
  );
};

export default Loading;
