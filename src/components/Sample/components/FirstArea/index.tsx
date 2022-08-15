import React, { FC, useState } from 'react';
// import { observer } from "mobx-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './index.module.scss';

const Index: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>①、日付選択</p>
      <div className={s.dateStyle}>
        <DatePicker
          selected={startDate}
          showPopperArrow={false}
          dateFormat="yyyy/MM/dd"
          popperPlacement="bottom-start"
          placeholderText="I have been cleared!"
          className={s.inputStyle}
          isClearable
          popperModifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, -10]
              }
            }
            // {
            //     name:'popperOffsets',
            //     options:{
            //         with:250,
            //         height:250,
            //     }
            // }
          ]}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default Index;
