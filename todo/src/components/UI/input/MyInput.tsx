import React, { FC } from 'react';
import { IMyInputProps } from 'types/types';

const MyInput: FC<IMyInputProps> = ({ id, name, description, value, onChange, className }) => {
  return (
    <>
      <label className={'label__' + name} htmlFor={id}>
        {description}
      </label>
      <input
        type="text"
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default MyInput;
