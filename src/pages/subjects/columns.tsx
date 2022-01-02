import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';

import Trash from '../../components/icons/Trash';
import { SubjectDto } from '../../typings/subject';
import { UserDto } from '../../typings/user';

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
    dataIndex: 'title',
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
    dataIndex: 'classes',
  },
  {
    title: 'Ким викладається',
    dataIndex: 'users',
    render: (teachers: UserDto[]) => {
      if (typeof teachers !== 'undefined' && teachers.length > 0) {
        return (
          <Link to={`/teachers/${teachers[0].id}`} className='profile__link'>
            {teachers[0].name}
          </Link>
        );
      }
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
