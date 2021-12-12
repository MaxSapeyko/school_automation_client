import { createUseStyles } from 'react-jss';
import { COLORS } from '../../utils/common';

const useStyles = createUseStyles({
  root: {
    '& .profile__link': {
      color: COLORS.blue,

      '&:hover': {
        textDecoration: 'underline',
      }
    }
  },
});

export default useStyles;
