import React from 'react';
import { Layout, Button, Menu } from 'antd';
import logo from '@images/g_head02_logo.gif';

import styles from './headerBar.module.scss';
import { useCurrentWidth } from 'react-socks';

const { Header } = Layout;

const HeaderBar = (props) => {
  const menuList = [
    {
      id: 1,
      name: 'HOME',
      children: [
        {
          id: 101,
          name: '手数料',
        },
        {
          id: 102,
          name: '取扱商品',
        },
        {
          id: 103,
          name: 'ツール・アプリ',
        },
        {
          id: 104,
          name: 'サービス案内',
        },
      ],
    },
    {
      id: 2,
      name: 'マーケット',
      children: [
        {
          id: 21,
          name: '指数・為替・金利',
        },
        {
          id: 22,
          name: 'ランキング',
        },
      ],
    },
    {
      id: 3,
      name: '国内株式',
    },
    {
      id: 4,
      name: '外国株式',
    },
    {
      id: 5,
      name: '投信',
    },
    {
      id: 6,
      name: '債券',
    },
    {
      id: 7,
      name: 'FX',
    },
    {
      id: 8,
      name: '先物',
    },
    {
      id: 9,
      name: 'CFD',
    },
    {
      id: 10,
      name: '金·银',
    },
    {
      id: 11,
      name: 'NISA',
    },
    {
      id: 12,
      name: 'iDeCo',
    },
    {
      id: 13,
      name: '銀行',
    },
    {
      id: 14,
      name: '保険',
    },
  ];

  const childrenData = (data) => {
    return (
      <ul className={styles.down}>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };

  const childrenData2 = (data) => {
    return (
        data.map((item) => (
          <Menu.Item key={item.id}>
            {item.name}
          </Menu.Item>
        ))
    );
  };

  const getwidth = useCurrentWidth();
  const gamenHyoujiFlg = () => {
    if (getwidth < 634) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Header className={styles.headerBar}>
      <div className={gamenHyoujiFlg() ? styles.header2 : styles.header}>
        <div>
          <img src={logo} alt="es-lint want to get" />
        </div>
        <div style={gamenHyoujiFlg() ? { lineHeight: 2 } : {}}>
          <Button type="link">よくあるご質問</Button>|<Button type="link">お問い合わせ</Button>|
          <Button type="link">サイトマップ</Button>
        </div>
      </div>
      {/* <div className={styles.menu}>
        <div className={styles.menuList}>
          {menuList.map((item) => (
            <div className={styles.menuBox} key={item.id}>
              {item.name}
              {item.children && childrenData(item.children)}
            </div>
          ))}
        </div>
      </div> */}
      <div className={styles.menu2}>
        <Menu mode="horizontal">
          {menuList.map((item) => (
            <Menu.SubMenu key={item.id} title={item.name}>
              {item.children && childrenData2(item.children)}
            </Menu.SubMenu>
          ))}
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderBar;
