import { createUseStyles } from 'react-jss';
import { COLORS } from '../../../utils/common';

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

    '& .ant-table-cell': {
      '& .cell__inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '6.1rem',
        width: '100%',
      },

      '&.holiday': {
        cursor: 'not-allowed',
        backgroundColor: COLORS.lightBlue,
      },

      '&.holiday,.ant-table-cell-row-hover.holiday': {
        cursor: 'not-allowed',
        backgroundColor: COLORS.lightBlue,
      },

      '&.ant-table-cell-row-hover.holiday': {
        backgroundColor: COLORS.lightBlue,
      },

      '&.grade': {
        cursor: 'pointer',
        padding: '0',
      },

      '& .no-grade': {
        opacity: '0',
      },

      '& .bad-grade': {
        backgroundColor: COLORS.bad,
      },

      '& .good-grade': {
        backgroundColor: COLORS.emerald,
      },

      '& .miss': {
        backgroundColor: COLORS.gray,
      },
    },
  },
});

export default useStyles;
