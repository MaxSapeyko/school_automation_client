import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',

    '& .teacher__title': {
      fontWeight: '600',
    },

    '& .col': {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
  },
});

export default useStyles;
