import React, { FC, useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import { MagazineDateModel } from '../../typings/magazine';
import { SubjectDto } from '../../typings/subject';
import { UserDto } from '../../typings/user';
import { Role } from '../../utils/enums';

import Header from './header';
import Table from './table';

const Magazine: FC = () => {
  const [magazineDate, setMagazineDate] = useState<MagazineDateModel>({
    date: null,
    dateString: new Date().toDateString(),
  });
  const [magazineSubject, setMagazineSubject] = useState<SubjectDto | null>(
    null
  );
  const [selectedClass, setSelectedClass] = useState<number>(0);
  const [pupils, setPupils] = useState<UserDto[]>([]);

  const getPupils = async () => {
    const users = await userService.allUsers();
    const pupils = users.filter((user) => user.role === Role.Student);

    setPupils(pupils);
  };

  const changeMagazineDates = (date: any, dateString: string) => {
    setMagazineDate({
      date: date,
      dateString: dateString,
    });
  };

  const getFilteredPupils = () => {
    return pupils.filter((pupil) => pupil.class === String(selectedClass));
  };

  useEffect(() => {
    getPupils();
  }, []);

  return (
    <div>
      <Header
        changeMagazineDates={changeMagazineDates}
        setMagazineSubject={setMagazineSubject}
        magazineSubject={magazineSubject}
        setSelectedClass={setSelectedClass}
      />

      <Table
        data={
          magazineSubject && magazineDate.dateString && selectedClass
            ? getFilteredPupils()
            : []
        }
        magazineDate={magazineDate}
        magazineSubject={magazineSubject}
      />
    </div>
  );
};

export default Magazine;
