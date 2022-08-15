import { FC } from 'react';
// import { observer } from "mobx-react";
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
import s from './index.module.scss';

const Index: FC = () => {
  const setNowDate = (daysToPlus: number) => {
    return moment()
      .add(daysToPlus * 24 * 3600 * 1000)
      .format('YY/MM/DD');
  };

  const setPcSmFlg = () => {
    const isSm = useMediaQuery({ minWidth: 0, maxWidth: 634 });
    return isSm ? true : false;
  };

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑦、PC/SP 表組切替</p>
      <div className={s.dateStyle}>
        <table className={setPcSmFlg() ? s.sp_table : s.pc_table}>
          <thead>
            <tr>
              <th> </th>
              <th>column 1 ⇒ {moment().format('YY/MM/DD')}</th>
              <th>column 2 ⇒ 123,456</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>line A</th>
              <td data-title={'column 1 => ' + setNowDate(0)}>data A-1</td>
              <td data-title={'column 2 => 123,456'}>data A-2</td>
            </tr>
            <tr>
              <th>line B</th>
              <td data-title={'column 1 => ' + setNowDate(0)}>data B-1</td>
              <td data-title={'column 2 => 123,456'}>data B-2</td>
            </tr>
            <tr>
              <th>line C</th>
              <td data-title={'column 1 => ' + setNowDate(0)}>data C-1</td>
              <td data-title={'column 2 => 123,456'}>data C-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
