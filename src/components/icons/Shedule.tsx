import React, { FC } from 'react';

const Shedule: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='21'
      height='23'
      viewBox='0 0 21 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.49 1.013V5.013M6.48999 1.013V5.013M1.48999 9.01299H19.49M3.48999 3.013H17.49C18.5946 3.013 19.49 3.90843 19.49 5.013V19.013C19.49 20.1176 18.5946 21.013 17.49 21.013H3.48999C2.38542 21.013 1.48999 20.1176 1.48999 19.013V5.013C1.48999 3.90843 2.38542 3.013 3.48999 3.013Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Shedule;
