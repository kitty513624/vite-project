import React, { FC, useState } from 'react';
// import { observer } from "mobx-react";
import s from './index.module.scss';
import { CSVLink, CSVDownload } from 'react-csv';

const Index: FC = () => {
  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
  ];

  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' }
  ];

  const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' }
  ];
  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑥、CSVダウンロード</p>
      <div style={{ marginLeft: 20, textAlign: 'left' }}>
        <p style={{ fontWeight: 400 }}>CSVLink1:</p>
        <CSVLink
          data={csvData}
          filename={'my-file.csv'}
          className={s.btnStyle}
          onClick={() => {
            console.log('You click the link');
            // return false;
          }}
          target="_blank"
        >
          Download me
        </CSVLink>
        <div>-----------------------------------</div>
        <p style={{ fontWeight: 400 }}>CSVLink2:</p>
        <CSVLink data={data} headers={headers} className={s.btnStyle}>
          Download me
        </CSVLink>
      </div>
    </div>
  );
};

export default Index;
