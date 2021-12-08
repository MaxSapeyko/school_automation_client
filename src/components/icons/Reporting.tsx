import React, { FC } from 'react';

const Reporting: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width='19'
      height='23'
      viewBox='0 0 19 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.3184 1.0824H3.31836C2.78793 1.0824 2.27922 1.29311 1.90415 1.66818C1.52907 2.04326 1.31836 2.55196 1.31836 3.0824V19.0824C1.31836 19.6128 1.52907 20.1215 1.90415 20.4966C2.27922 20.8717 2.78793 21.0824 3.31836 21.0824H15.3184C15.8488 21.0824 16.3575 20.8717 16.7326 20.4966C17.1076 20.1215 17.3184 19.6128 17.3184 19.0824V7.0824M11.3184 1.0824L17.3184 7.0824M11.3184 1.0824V7.0824H17.3184M13.3184 12.0824H5.31836M13.3184 16.0824H5.31836M7.31836 8.0824H5.31836'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Reporting;
