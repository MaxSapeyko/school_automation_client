import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .user__photo': {
      width: '14rem',
      height: '14rem',
    }
  },
});

export default useStyles;
