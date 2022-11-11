import React, { FC } from 'react';
import { IMyButtonProps } from 'types/types';

const MyButton: FC<IMyButtonProps> = ({ className, disabled, onClick, children }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
