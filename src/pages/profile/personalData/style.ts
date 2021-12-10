import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

const useStyles = createUseStyles({
  root: {
    '& .info__items': {
      paddingRight: '2rem',
      borderRight: `0.1rem solid ${COLORS.gray}`,
    },

    '& .user__photo': {
      marginRight: '3rem',
      width: '14rem',
      height: '14rem',
    },

    '& .ant-form-item': {
      maxWidth: '36.8rem',
    },
  },
});

export default useStyles;
