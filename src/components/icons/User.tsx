import React, { FC } from 'react';

const User: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='18'
      height='20'
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default User;
