import React, { FC } from 'react';
import { IMyInputProps } from 'types/types';

const MyInput: FC<IMyInputProps> = ({ id, name, description, value, onChange, className }) => {
  return (
    <>
      <label className={'label__' + name} htmlFor={id}></label>
      <input
        type="text"
        id={id}
        className={className}
        placeholder={description}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default MyInput;
