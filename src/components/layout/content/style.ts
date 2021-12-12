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

    '& .back__link': {
      fontWeight: '600',
      fontSize: '1.8rem',
      color: COLORS.blue,
      display: 'flex',
      alignItems: 'center',

      '& .link__text': {
        marginLeft: '1rem',
      },
    },

    '& .header__btn': {
      height: '5.8rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
      fontSize: '1.6rem',
      backgroundColor: COLORS.blue,

      '&.disabled': {
        backgroundColor: COLORS.dividers
      }
    },

    '& .header__actions': {
      gap: '0 3rem',
    },

    '& .header__actions, .switch__block': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .switch__block': {
      fontWeight: '500',
      fontSize: '1.6rem',

      '& .ant-switch': {
        marginRight: '1rem',
      }
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
