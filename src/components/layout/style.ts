import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    display: 'flex',
    paddingLeft: '28rem',

    '& .main': {
      width: '100%',
    },
  },
});

export default useStyles;
