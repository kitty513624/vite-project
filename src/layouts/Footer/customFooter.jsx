import React from 'react';
import { Layout } from 'antd';
import styles from './customFooter.module.scss';

const { Footer } = Layout;

const CustomFooter = () => {
	return (
		<Footer className={styles.footer}>
			<div>金融商品取引業者 株式会社SBI証券 関東財務局長（金商）第44号</div>
			<div>
				加入協会/日本証券業協会、一般社団法人 金融先物取引業協会、一般社団法人 第二種金融商品取引業協会、一般社団法人 日本STO協会
			</div>
			<div>
				SBI証券（オンライン総合証券最大手）－オンライントレードで株式・投資信託・債券を－ © SBI SECURITIES Co., Ltd. ALL Rights
				Reserved.
			</div>
		</Footer>
	);
};

export default CustomFooter;
