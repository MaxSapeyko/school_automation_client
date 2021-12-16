import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import Trash from '../../components/icons/Trash';

const deleteSubject = (id: string) => {
  // TODO connect API
};

const COLUMNS: ColumnsType<SubjectDto> = [
  {
    title: '№',
    dataIndex: 'id',
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
    render: (_, subject: SubjectDto) => (
      <Trash
        className='trash__icon'
        onClick={() => deleteSubject(subject.id)}
      />
    ),
  },
];

export default COLUMNS;
