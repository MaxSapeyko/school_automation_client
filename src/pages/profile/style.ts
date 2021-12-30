import { createUseStyles } from 'react-jss';
import { COLORS } from '../../utils/common';

const useStyles = createUseStyles({
  root: {
    '& .data-module__title': {
      fontSize: '3.2rem',
      fontWeight: '600',
    },

    '& .info__inner': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .info__items': {
      margin: '2.4rem 0 0 0',
    },

    '& .ant-form-item_no-margin': {
      margin: '0',
    },

    '& .ant-form-item': {
      maxWidth: '45.4rem',
      minWidth: '20rem',

      '& input': {
        borderColor: COLORS.black,
        fontSize: '1.6rem',
        fontWeight: '600',
        height: '5.8rem',
      },
    },

    '& .header__inner': {
      display: 'flex',
      gap: '2rem',
    },
  },
});

export default useStyles;
