import { ColumnsType } from 'antd/lib/table';
import Trash from '../../../components/icons/Trash';

const COLUMNS: ColumnsType<UserDto> = [
  {
    title: '№',
    dataIndex: 'id',
    render: (name: string) => <span>{name}</span>,
  },
  {
    title: 'ПІБ',
    dataIndex: 'name',
    render: (name: string) => <span>{name}</span>,
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
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
  },
  {
    title: 'Дії',
    render: (_field: string) => <Trash className='trash__icon'/>,
  },
];

export default COLUMNS;
