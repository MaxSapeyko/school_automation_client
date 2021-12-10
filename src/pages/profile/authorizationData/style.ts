import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    paddingLeft: '2rem',

    '& .info__items': {
      margin: '4rem 0 0 0 !important',
      flexDirection: 'column',
    },
  },
});

export default useStyles;
