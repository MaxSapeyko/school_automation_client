import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    heigth: '100vh',
    width: '28rem',
    backgroundColor: COLORS.blue,
    color: COLORS.white,
  },
});

export default useStyles;
