import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import { UserDto } from '../../../typings/user';

const COLUMNS = (deleteUser: (id: string) => void): ColumnsType<UserDto> => [
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
    render: (_name: string, user: UserDto) => {
      return (
        <Link
          to={`/pupils/${user.id}`}
          className='profile__link'
        >{`${user.lastname} ${user.name} ${user.surname}`}</Link>
      );
    },
  },
];

export default COLUMNS;
