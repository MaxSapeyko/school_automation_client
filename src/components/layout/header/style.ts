import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '8rem',
    padding: '0 4rem',
    backgroundColor: COLORS.white,
    borderBottom: `0.1rem solid ${COLORS.gray}`,

    '& .user__photo': {
      width: '5rem',
      height: '5rem',
      borderRadius: '50%',
      border: `0.1rem solid ${COLORS.gray}`,
    },

    '& .user__name': {
      color: COLORS.black,
      marginLeft: '1.2rem',
      fontSize: '1.8rem',
      fontWeight: '600',
    },
  },
});

export default useStyles;
