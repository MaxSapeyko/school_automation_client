import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import Trash from '../../components/icons/Trash';

const COLUMNS = (
  deleteSubject: (id: string) => void
): ColumnsType<SubjectDto> => [
  {
    title: '№',
    dataIndex: 'id',
    render: (_1: any, _2: any, index: number) => {
      return <span>{index + 1}</span>;
    },
  },
  {
    title: 'Назва предмета',
    dataIndex: 'name',
    render: (name: string, subject: SubjectDto) => {
      return (
        <Link to={`/subjects/${subject.id}`} className='profile__link'>
          {name}
        </Link>
      );
    },
  },
  {
    title: 'Клас',
    dataIndex: 'class',
  },
  {
    title: 'Ким викладається',
    dataIndex: 'teacher',
    render: (teacher: string) => {
      return (
        <Link to={`/subjects/${teacher}`} className='profile__link'>
          {teacher}
        </Link>
      );
    },
  },
  {
    title: 'Дії',
    render: (action: any, subject: SubjectDto) => (
      <Trash
        className='trash__icon'
        onClick={() => deleteSubject(subject.id)}
      />
    ),
  },
];

export default COLUMNS;
