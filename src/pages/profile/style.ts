import { createUseStyles } from 'react-jss';
import { COLORS } from '../../utils/common';

const useStyles = createUseStyles({
  root: {
    '& .data-module__title': {
      fontSize: '3.2rem',
      fontWeight: "600",
    },

    '& .info__inner': {
      display: 'flex',
      alignItems: 'center',
    },
    
    '& .info__items': {
      margin: '2.4rem 0 0 3rem',
    },

    '& .ant-form-item': {
      maxWidth: '36.8rem',
      minWidth: '20rem',

      '& input': {
        borderColor: COLORS.black,
        fontSize: '1.6rem',
        fontWeight: '600',
      },
    },
  },
});

export default useStyles;
