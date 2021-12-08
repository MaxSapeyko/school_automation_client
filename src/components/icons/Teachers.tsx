import React, { FC } from 'react';

const Teachers: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='24'
      height='23'
      viewBox='0 0 24 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 22V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H10.5M1 22V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H7.5M23 22V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13M16 1.13C16.8604 1.35031 17.623 1.85071 18.1676 2.55232C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89318 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88M7.5 13H10.5M7.5 13L6.5 18.5L9 22L11.5 18.5L10.5 13M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Teachers;
