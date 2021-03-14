import React from 'react';
import './CheckCustom.scss';

const CheckCustom = ({ idCheck, text }) => {
  return (
    <div className="checkCustom">
      <input type="checkbox" name={idCheck} id={idCheck} value={text} />
      <label htmlFor={idCheck} className="checkLabel">
        <i></i>
        {text}
      </label>
    </div>
  );
};

export default CheckCustom;
