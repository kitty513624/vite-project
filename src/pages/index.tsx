import React, { useState } from 'react';
// import { Tabs } from 'antd';
import DefaultLayout from '@layouts/DefaultLayout/defaultLayout';

import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Demo from '@components/Demo/index';
import { useAuth } from '@/context/auth-context';
import { useQuery } from 'react-query';

// import Tutorial from "../types/Tutorial";
// import TutorialService from "../services/TutorialService";
// import Tutorial from "../types/Tutorial";
import { fetchHomeList } from '@/api/WPLETitT003Rlst10';

// import { http } from '@utils/http';
// import useGithubIssuesQuery from '@utils/issuesQuery';

// const { TabPane } = Tabs;

const Index = () => {
	const [activeKey, setActiveKey] = useState('1');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setActiveKey(newValue);
	};
	const { token } = useAuth();
	console.log(token, '-----token-----');

	// const data = useQuery(['issues'], http)
	// console.log(data, '-------data issues-------');
	// const data = useGithubIssuesQuery('facebook','react');
	// console.log(data, '-------------useGithubIssuesQuery-------------');

	// const [getResult, setGetResult] = useState<string | null>(null);
	// const fortmatResponse = (res: any) => {
	// 	return JSON.stringify(res, null, 2);
	// };

	const {
		data: fetchHomeListData,
		isLoading: isLoadingTutorials,
		// eslint-disable-next-line
		refetch: getAllTutorials
	} = useQuery(['fetch-home-list'], async () => {
		return await fetchHomeList('');
	});
	console.log(isLoadingTutorials, '-------测试isLoadingTutorials-------');
	console.log(fetchHomeListData, '-------测试react-query-------');

	return (
		<DefaultLayout>
			{/* <Tabs defaultActiveKey="1" type="card" activeKey={activeKey}>
                <TabPane tab={<span>　投信　<br />(金額買付)</span>} key="1">
                </TabPane>
            </Tabs> */}
			<TabContext value={activeKey}>
				<Box>
					<TabList onChange={handleChange}>
						<Tab
							label={
								<span>
									　投信　
									<br />
									(金額買付)
								</span>
							}
							value="1"
						/>
						<Tab
							label={
								<span>
									　投信　
									<br />
									(口数買付)
								</span>
							}
							value="2"
						/>
						<Tab
							label={
								<span>
									　投信　
									<br />
									(積立買付)
								</span>
							}
							value="3"
						/>
						<Tab
							label={
								<span>
									新規募集
									<br />
									&nbsp;&nbsp;・取扱　
								</span>
							}
							value="4"
						/>
						<Tab
							label={
								<span>
									外貨建MMF
									<br />
									　&nbsp;&nbsp;(買付)
								</span>
							}
							value="5"
						/>
						<Tab
							label={
								<span>
									外貨建MMF
									<br />
									&nbsp;&nbsp;(積立買付)
								</span>
							}
							value="6"
						/>
						<Tab label="　売却　" value="7" />
						<Tab label="　売却　" value="8" />
						<Tab
							label={
								<span>
									注文照会
									<br />
									　(取消)
								</span>
							}
							value="9"
						/>
					</TabList>
				</Box>
				<TabPanel value="1">
					<Demo />
				</TabPanel>
				<TabPanel value="2">
					{
						<span>
							　投信　
							<br />
							(口数買付)
						</span>
					}
				</TabPanel>
				<TabPanel value="3">
					{
						<span>
							　投信　
							<br />
							(積立買付)
						</span>
					}
				</TabPanel>
				<TabPanel value="4">
					{
						<span>
							新規募集
							<br />
							&nbsp;&nbsp;・取扱　
						</span>
					}
				</TabPanel>
				<TabPanel value="5">
					{
						<span>
							外貨建MMF
							<br />
							　&nbsp;&nbsp;(買付)
						</span>
					}
				</TabPanel>
				<TabPanel value="6">
					{
						<span>
							外貨建MMF
							<br />
							&nbsp;&nbsp;(積立買付)
						</span>
					}
				</TabPanel>
				<TabPanel value="7">　売却　</TabPanel>
				<TabPanel value="8">　乗換　</TabPanel>
				<TabPanel value="9">
					{
						<span>
							注文照会
							<br />
							　(取消)
						</span>
					}
				</TabPanel>
			</TabContext>
		</DefaultLayout>
	);
};

export default Index;
