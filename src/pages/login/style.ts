import { createUseStyles } from 'react-jss';
import { COLORS } from '../../utils/common';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: '0 1rem 14.8rem',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    textAlign: 'center',

    '& .logo__icon': {
      margin: 'auto',
    },

    '& .form__title': {
      margin: '6rem auto 3rem',
      maxWidth: '71rem',
      fontSize: '3.2rem',
      fontWeight: '700',
      lineHeight: '1.2',
    },

    '& .form__description': {
      marginBottom: '6rem',
      fontSize: '1.7rem',
      lineHeight: '1.2',
    },

    '& .ant-form-item-control': {
      margin: 'auto',
      maxWidth: '32rem',

      '& .form__item': {
        height: '5.8rem',
      },
    },

    '& .submit__btn': {
      width: '32rem',
      height: '5.8rem',
      backgroundColor: COLORS.blue,
      fontWeight: '500',
      fontSize: '1.6rem',
    },
  },

  footer: {
    maxWidth: '134rem',
    width: 'calc(100% - 2rem)',
    position: 'fixed',
    left: '50%',
    bottom: '0',
    borderTop: `1px solid ${COLORS.dividers}`,
    padding: '3rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: 'translate(-50%, 0)',

    '& .help__text': {
      display: 'inline-block',
      fontSize: '1.5rem',
      lineHeight: '1.3',
    },

    '& .help__items': {
      display: 'flex',
      gap: '0 4.2rem',
      alignItems: 'center',
    },

    '& .help__item': {
      display: 'flex',
      alignItems: 'center',

      '& .help__item-text': {
        fontWeight: '500',
        color: COLORS.black,
        marginLeft: '0.8rem',
      },
    },
  },
});

export default useStyles;
