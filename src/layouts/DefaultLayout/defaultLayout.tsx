import { Layout } from 'antd';
import Header from '../Header/headerBar';
// import Header from '../Header/ButtonAppBar.jsx';
import Footer from '../Footer/customFooter';
import styles from './defaultLayout.module.scss';

const { Content } = Layout;

// eslint-disable-next-line
const DefaultLayout = ({ children }) => {
  // メニューが折りたたまらる状態が親コンポーネントで制御する。
  // localStorageから取得したのがstring、booleanに変換する必要がある。
  // const collapsedFromStore = localStorage.getItem('menuCollapsed') === 'true';
  // const [menuCollapsed, setMenuCollapsed] = useState(collapsedFromStore);

  // const onMenuCollapsed = (collapsed) => {
  // 	setMenuCollapsed(collapsed);
  // 	localStorage.setItem('menuCollapsed', collapsed);
  // };

  return (
    <Layout className={styles.layout}>
      <Header />
      {/* <Header onMenuCollapsed={onMenuCollapsed} menuCollapsed={menuCollapsed} /> */}
      <Content className={styles.content}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default DefaultLayout;
