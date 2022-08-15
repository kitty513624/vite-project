import React from 'react';
import s from './index.module.scss';
interface Pdata {
  name?: string;
  type?: string | number;
  // line: string;
  title: string;
}
const Title = (props: Pdata) => {
  return (
    <div className={[s[props.type || 'border'], s[props.title]].join(' ')}>
      <span /> {props.name || 'タイトル'}
    </div>
  );
};

export default Title;
