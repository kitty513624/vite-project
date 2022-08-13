import React from 'react';
import { Empty } from 'antd';
import DefaultLayout from '@layouts/DefaultLayout/defaultLayout';
import './Notfound.scss';

const NotFound = () => {
	return (
		<DefaultLayout>
			<div className="no-found">
				<Empty description="404" />
			</div>
		</DefaultLayout>
	);
};

export default NotFound;
