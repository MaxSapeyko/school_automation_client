import { createUseStyles } from 'react-jss';
import { COLORS, HEADER_HEIGHT } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    padding: '0 4rem',

    '& .content__header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '10rem',
    },

    '& .content__title': {
      fontWeight: '600',
      fontSize: '4rem',
    },

    '& .header__select .ant-select-selector': {
      borderColor: COLORS.black,
      borderRadius: '0.2rem',
      height: '5.8rem',

      '& .ant-select-selection-item': {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
      },
    },
  },
});

export default useStyles;
