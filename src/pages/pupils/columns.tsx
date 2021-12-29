import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import Trash from '../../components/icons/Trash';
import { UserDto } from '../../typings/user';
import { SexTranslate } from '../../utils/common';

const COLUMNS = (deleteUser: (id: string) => void): ColumnsType<UserDto> => [
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
    title: 'Клас',
    dataIndex: 'class',
  },
  {
    title: 'Дата народження',
    dataIndex: 'dateOfBirth',
    render: (dateOfBirth: string) => {
      return <span>{new Date(dateOfBirth).toLocaleDateString()}</span>;
    },
  },
  {
    title: 'Стать',
    dataIndex: 'sex',
    render: (sex: 'man' | 'woman') => {
      return <span>{SexTranslate[sex]}</span>;
    },
  },
  {
    title: 'Батьки',
    dataIndex: 'parents',
    render: (_name: string, user: UserDto) => {
      return <span>{`${user.lastname} ${user.name} ${user.surname}`}</span>;
    },
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
  },
  {
    title: 'Дії',
    render: (unused: any, user: UserDto) => (
      <Trash className='trash__icon' onClick={() => deleteUser(user.id)} />
    ),
  },
];

export default COLUMNS;
