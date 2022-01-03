import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .day-column__block': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& div': {
        textAlign: 'center',
      },
    },
  },
});

export default useStyles;
