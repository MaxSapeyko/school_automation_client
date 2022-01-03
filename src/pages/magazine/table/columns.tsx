import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import { GradeDto } from '../../../typings/magazine';

const COLUMNS = (deleteUser: (id: string) => void): ColumnsType<GradeDto> => [
  {
    title: '№',
    dataIndex: 'id',
    fixed: 'left',
    width: 50,
    render: (_1: any, _2: any, index: number) => {
      return <span>{index + 1}</span>;
    },
  },
  {
    title: 'ПІБ учня',
    dataIndex: 'name',
    fixed: 'left',
    width: 150,
    render: (_name: string, grade: GradeDto) => {
      return (
        <Link
          to={`/pupils/${grade.user.id}`}
          className='profile__link'
        >{`${grade.user.lastname} ${grade.user.name} ${grade.user.surname}`}</Link>
      );
    },
  },
];

export default COLUMNS;
