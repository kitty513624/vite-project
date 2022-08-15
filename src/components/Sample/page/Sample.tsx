import { FC } from 'react';
import SecondArea from '../components/SecondArea';
import FirstArea from '../components/FirstArea';
import ThirdArea from '../components/ThirdArea';
import FourthArea from '../components/FourthArea';
import FifthArea from '../components/FifthArea';
import SixthArea from '../components/SixthArea';
import SeventhArea from '../components/SeventhArea';
import EighthArea from '../components/EighthArea';
import NinthArea from '../components/NinthArea';
import TenthArea from '../components/TenthArea';
import { Pdata } from '../components/fieldType';
import s from './Sample.module.scss';
const PageA: FC<Pdata> = (props) => {
  return (
    <div className={s.page}>
      <FirstArea />
      <SecondArea />
      <ThirdArea />
      <FourthArea />
      <FifthArea />
      <SixthArea />
      <SeventhArea />
      <EighthArea />
      <NinthArea />
      <TenthArea />
    </div>
  );
};

export default PageA;
