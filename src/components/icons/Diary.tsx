import React, { FC } from 'react';

const Diary: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.63636 7.36364H1M4.63636 11H1M17.3636 9.18182H11.9091M17.3636 12.8182H11.9091M4.63636 14.6364H1M8.27273 21L8.27273 1M4.63636 21H19.1818C20.186 21 21 20.186 21 19.1818V2.81818C21 1.81403 20.186 1 19.1818 1H4.63636C3.63221 1 2.81818 1.81403 2.81818 2.81818V19.1818C2.81818 20.186 3.63221 21 4.63636 21Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Diary;
