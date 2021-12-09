import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    height: '8rem',
    backgroundColor: COLORS.white,
    borderBottom: `0.1rem solid ${COLORS.gray}`,
  },
});

export default useStyles;
