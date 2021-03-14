import React from 'react';
import './SelectCustom.scss';

const SelectCustom = ({
  styleComponent,
  idComponent,
  selectArray,
  firstValue,
  typeValue,
  value,
  setValue,
  functionComponent,
}) => {
  return (
    <select
      className={
        styleComponent ? `selectCustom ${styleComponent}` : `selectCustom`
      }
      name={idComponent}
      id={idComponent}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
        if (functionComponent) {
          functionComponent(target.value);
        }
      }}
    >
      <option value="" disabled>
        {firstValue}
      </option>
      {selectArray.map((select) => {
        return (
          <option key={select.ID} value={select[typeValue]}>
            {select.Name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCustom;
