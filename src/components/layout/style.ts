import { createUseStyles } from 'react-jss';
import { COLORS } from '../../utils/common';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    display: 'flex',
    paddingLeft: '28rem',

    '& .main': {
      width: '100%',
    },

    '& .ant-pagination-item': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },

    '& .trash__icon:hover': {
      cursor: 'pointer',

      '&:hover path': {
        fill: COLORS.blue,
      },
    },
  },
});

export default useStyles;
