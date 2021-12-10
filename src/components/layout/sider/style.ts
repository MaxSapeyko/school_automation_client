import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    width: '28rem',
    backgroundColor: COLORS.blue,
    color: COLORS.white,

    '& .logo__icon': {
      width: '8rem',
      height: '4.9rem',
      margin: '4.6rem auto',
      display: 'block',

      '& path': {
        fill: COLORS.white,
      },
    },
  },

  menu: {
    backgroundColor: 'transparent',
    color: COLORS.white,
    fontWeight: '600',
    fontSize: '1.5rem',
    border: 'none',

    '& a': {
      color: COLORS.white,
    },

    '&.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected': {
      backgroundColor: COLORS.emerald,

      '& a': {
        color: COLORS.white,
      },
    },

    '& .ant-menu-item-active': {
      backgroundColor: COLORS.emerald,

      '& a': {
        color: `${COLORS.white} !important`,
      },
    },

    '& .ant-menu-item::after': {
      display: 'none',
    },

    '& .logout__btn': {
      position: 'absolute',
      bottom: '2rem',
      width: '28rem',
    },
  },
});

export default useStyles;
