import React from 'react';
// eslint-disable-next-line
import { Layout, Menu } from 'antd';
import logo from '@images/g_head02_logo.gif';

import styles from './headerBar.module.scss';
import { useCurrentWidth } from 'react-socks';

import Button from '@mui/material/Button';
import { useAuth } from '@/context/auth-context';
// import { Stack } from '@mui/material';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

const { Header } = Layout;

const HeaderBar = () => {
	// const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	// const open = Boolean(anchorEl);
	// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	//   setAnchorEl(event.currentTarget);
	// };
	// const handleClose = () => {
	//   setAnchorEl(null);
	// };

	// const menuList = [
	// 	{
	// 		id: 1,
	// 		name: 'HOME',
	// 		children: [
	// 			{
	// 				id: 101,
	// 				name: '手数料'
	// 			},
	// 			{
	// 				id: 102,
	// 				name: '取扱商品'
	// 			},
	// 			{
	// 				id: 103,
	// 				name: 'ツール・アプリ'
	// 			},
	// 			{
	// 				id: 104,
	// 				name: 'サービス案内'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'マーケット',
	// 		children: [
	// 			{
	// 				id: 21,
	// 				name: '指数・為替・金利'
	// 			},
	// 			{
	// 				id: 22,
	// 				name: 'ランキング'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		id: 3,
	// 		name: '国内株式'
	// 	},
	// 	{
	// 		id: 4,
	// 		name: '外国株式'
	// 	},
	// 	{
	// 		id: 5,
	// 		name: '投信'
	// 	},
	// 	{
	// 		id: 6,
	// 		name: '債券'
	// 	},
	// 	{
	// 		id: 7,
	// 		name: 'FX'
	// 	},
	// 	{
	// 		id: 8,
	// 		name: '先物'
	// 	},
	// 	{
	// 		id: 9,
	// 		name: 'CFD'
	// 	},
	// 	{
	// 		id: 10,
	// 		name: '金·银'
	// 	},
	// 	{
	// 		id: 11,
	// 		name: 'NISA'
	// 	},
	// 	{
	// 		id: 12,
	// 		name: 'iDeCo'
	// 	},
	// 	{
	// 		id: 13,
	// 		name: '銀行'
	// 	},
	// 	{
	// 		id: 14,
	// 		name: '保険'
	// 	}
	// ];

	// const childrenData = data => {
	// 	return (
	// 		<ul className={styles.down}>
	// 			{data.map(item => (
	// 				<li key={item.id}>{item.name}</li>
	// 			))}
	// 		</ul>
	// 	);
	// };

	// const childrenData2 = data => {
	// 	return data.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>);
	// };
	// const childrenData2 = (data) => {
	//   return (
	//     data.map((item) => (
	//       <MenuItem key={item.id}>
	//         {item.name}
	//       </MenuItem>
	//     ))
	//   );
	// };

	const getwidth = useCurrentWidth();
	const gamenHyoujiFlg = () => {
		if (getwidth < 634) {
			return true;
		} else {
			return false;
		}
	};
	const { btnTitle } = useAuth();
	return (
		<Header className={styles.headerBar}>
			<div className={gamenHyoujiFlg() ? styles.header2 : styles.header}>
				<div>
					<img src={logo} alt="es-lint want to get" />
				</div>
				<div style={gamenHyoujiFlg() ? { lineHeight: 2 } : {}}>
					{/* <Button variant="text">よくあるご質問</Button>|<Button variant="text">お問い合わせ</Button>|
          <Button variant="text">サイトマップ</Button> */}
					<Button variant="text">{btnTitle[0]}</Button>|<Button variant="text">{btnTitle[1]}</Button>|
					<Button variant="text">{btnTitle[2]}</Button>
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
				{/* <Menu mode="horizontal">
					{menuList.map(item => (
						<Menu.SubMenu key={item.id} title={item.name}>
							{item.children && childrenData2(item.children)}
						</Menu.SubMenu>
					))}
				</Menu> */}
				{/* <Menu mode="horizontal">
          {
            menuList.map((item) => (
              <MenuItem key={item.id} title={item.name}>
                {item.children && childrenData2(item.children)}
              </MenuItem>
            ))
          }
        </Menu> */}
			</div>
		</Header>
	);
};

export default HeaderBar;
