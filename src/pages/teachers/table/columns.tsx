import { ColumnsType } from 'antd/lib/table';
import Trash from '../../../components/icons/Trash';

const deleteUser = (id: string) => {
  // TODO connect API
};

const COLUMNS: ColumnsType<UserDto> = [
  {
    title: '№',
    dataIndex: 'id',
  },
  {
    title: 'ПІБ',
    dataIndex: 'name',
    render: (_name: string, user: UserDto) => {
      return (
        <a
          href={`teachers/${user.id}`}
          className='profile__link'
        >{`${user.lastname} ${user.name} ${user.surname}`}</a>
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
