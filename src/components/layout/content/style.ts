import { createUseStyles } from 'react-jss';
import { COLORS, HEADER_HEIGHT } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  },
});

export default useStyles;
