import React, { useState } from 'react';
import { Tabs } from 'antd';
import DefaultLayout from '@layouts/DefaultLayout/defaultLayout';

const { TabPane } = Tabs;

const Index = () => {
	const [activeKey] = useState('1');

	return (
		<DefaultLayout>
			<Tabs defaultActiveKey="1" type="card" activeKey={activeKey}>
				<TabPane
					tab={
						<span>
							　投信　
							<br />
							(金額買付)
						</span>
					}
					key="1"
				>
					{/* <WPLETitT003Rlst10 activeKey={activeKey}/> */}
				</TabPane>
			</Tabs>
		</DefaultLayout>
	);
};

export default Index;
