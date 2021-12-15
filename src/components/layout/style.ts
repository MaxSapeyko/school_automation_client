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

    '& .ant-select-selection-placeholder': {
      display: 'flex',
      alignItems: 'center',
      color: COLORS.black,
      fontWeight: '600',
    },
  },
});

export default useStyles;
