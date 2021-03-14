import React from 'react';
import './ButtonCustom.scss';

const ButtonCustom = ({
  idButton,
  typeButton = 'submit',
  text,
  styleComponent,
  eventClick,
}) => {
  return (
    <button
      type={typeButton}
      name={idButton}
      id={idButton}
      className={
        styleComponent ? `buttonCustom ${styleComponent}` : `buttonCustom`
      }
      onClick={eventClick}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
