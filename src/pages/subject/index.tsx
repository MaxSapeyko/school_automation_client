import React, { FC, useEffect, useState } from 'react';
import { Col, Form, Input, notification, Row, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import Header from './header';

import { SubjectDto } from '../../typings/subject';
import { subjectService } from '../../services/subjectService';
import { useHistory } from 'react-router-dom';
import { userService } from '../../services/userService';
import { Role } from '../../utils/enums';
import { UserDto } from '../../typings/user';

import useStyles from './style';

const { Option } = Select;
const UUID_REGEXP = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const Subject: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form] = useForm();

  const subjectId = history.location.pathname.split('/')[2];
  const [isDisable, setIsDisable] = useState(
    Boolean(subjectId.match(UUID_REGEXP))
  );

  const [users, setUsers] = useState<UserDto[]>([]);
  const [subject, setSubject] = useState<SubjectDto | null>(null);

  const getSubject = async (id: string) => {
    try {
      if (subjectId) {
        const subject = await subjectService.subjectById(id);

        setSubject(subject);
        setUsers(subject.users);
        form.setFieldsValue({
          ...subject,
          user: subject?.users[0].id ?? '',
        });
      }
    } catch (error) {}
  };

  const createSubject = async (values: any) => {
    const classes = values.classes.split(',');

    try {
      const body = {
        title: values.title,
        classes: classes,
        users: values.user,
      };

      const newSubject = await subjectService.createSubject(body);

      setIsDisable(true);
      history.push(`/subjects/${newSubject.id}`);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Bad Request',
      });
    }
  };

  const getPupils = async () => {
    const users = await userService.allUsers();
    const teachers = users.filter((user) => user.role === Role.Teacher);

    setUsers(subjectId.match(UUID_REGEXP) ? subject!.users : teachers);
  };

  useEffect(() => {
    if (subjectId && subjectId.match(UUID_REGEXP)) {
      getSubject(subjectId);
    } else {
      getPupils();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Form form={form} onFinish={createSubject}>
        <Header isCreateMode={isDisable} />
        <Row justify='space-between'>
          <Col span={24}>
            <Form.Item required name='title'>
              <Input placeholder='Назва предмета' disabled={isDisable} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item required name='classes'>
              <Input placeholder='Оберіть клас(и)' disabled={isDisable} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item required name='user'>
              <Select
                placeholder='Виберіть вчителя який викладає предмет'
                disabled={isDisable}
              >
                {users &&
                  users.map((user) => (
                    <Option
                      key={user.id}
                      value={user.id}
                    >{`${user.lastname} ${user.name} ${user.surname}`}</Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Subject;
