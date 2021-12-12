import React, { FC } from 'react';

const LeftArrow: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='24'
      height='16'
      viewBox='0 0 24 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.43742 1L1.8125 8M1.8125 8L8.43742 15M1.8125 8L22.5038 8.033'
        stroke='#145198'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LeftArrow;
