import React, { FC, useState } from 'react';
import { MagazineDateModel } from '../../typings/magazine';

import Header from './header';
import Table from './table';

const Magazine: FC = () => {
  const [magazineDate, setMagazineDate] = useState<MagazineDateModel>({
    date: null,
    dateString: new Date().toDateString(),
  });

  const changeMagazineDates = (date: any, dateString: string) => {
    console.log(date, dateString);
    setMagazineDate({
      date: date,
      dateString: dateString,
    });
  };

  return (
    <div>
      <Header changeMagazineDates={changeMagazineDates} />

      <Table data={[]} magazineDate={magazineDate} />
    </div>
  );
};

export default Magazine;
