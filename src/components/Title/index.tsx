import styles from './index.module.scss';
interface Pdata {
  name?: string;
  type?: string | number;
  // line: string;
  title: string;
}
const Title = (props: Pdata) => {
  return (
    <div className={[styles[props.type || 'border'], styles[props.title]].join(' ')}>
      <span> {props.name || 'タイトル'} </span>
    </div>
  );
};

export default Title;
