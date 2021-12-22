import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import Trash from '../../components/icons/Trash';
import { userService } from '../../services/userService';
import { UserDto } from '../../typings/user';

const deleteUser = async (id: string) => {
  await userService.deleteUserById(id);
};

const COLUMNS: ColumnsType<UserDto> = [
  {
    title: '№',
    dataIndex: 'id',
    render: (_1: any, _2: any, index: number) => {
      return <span>{index + 1}</span>;
    },
  },
  {
    title: 'ПІБ',
    dataIndex: 'name',
    render: (_name: string, user: UserDto) => {
      return (
        <Link
          to={`/pupils/${user.id}`}
          className='profile__link'
        >{`${user.lastname} ${user.name} ${user.surname}`}</Link>
      );
    },
  },
  {
    title: 'Посада',
    dataIndex: 'position',
  },
  {
    title: 'Спеціалізація',
    dataIndex: 'specialization',
  },
  {
    title: 'Класи',
    dataIndex: 'classes',
    render: (classes: string[]) => <span>{classes.join(', ')}</span>,
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
  },
  {
    title: 'Дії',
    render: (_, user: UserDto) => (
      <Trash className='trash__icon' onClick={() => deleteUser(user.id)} />
    ),
  },
];

export default COLUMNS;
