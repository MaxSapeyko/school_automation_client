import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    display: 'flex',

    '& .main': {
      width: 'calc(100% - 28rem)',
    },
  },
});

export default useStyles;
