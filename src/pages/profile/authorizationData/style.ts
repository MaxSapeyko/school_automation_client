import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    paddingLeft: '2rem',

    '@media screen and (max-width: 1600px)': {
      paddingLeft: '0',
    },

    '& .info__items': {
      margin: '4rem 0 0 0 !important',
      flexDirection: 'column',
    },
  },
});

export default useStyles;
