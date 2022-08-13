import React from 'react';
import { useQuery, useMutation } from 'react-query';
// import { getUser, postUser } from '@api/WPLETitT003Rlst10';
import { fetchHomeList, postUser } from '@api/WPLETitT003Rlst10';
import Button from '@mui/material/Button';

const Index = () => {
	// {data, isLoading: isLoadingTutorials, refetch: getAllTutorials }
	const {
		data: user,
		isLoading: isLoadingTutorials,
		error: isErrors,
		// eslint-disable-next-line
		refetch: getAllTutorials
	} = useQuery(['query-users'], async () => {
		// return await TutorialService.getUser();
		return await fetchHomeList('');
		// return await getUser();
	});
	console.log(isLoadingTutorials, '-------测试isLoadingTutorials-------');
	console.log(isErrors, '-------测试 报错信息-------');
	console.log(user, '-------测试react-query-------');

	const Mutation = useMutation(['query-users'], async () => {
		return await postUser();
	});

	return (
		<div>
			<p>Test 测试页面！</p>
			<Button
				variant="contained"
				onClick={() => {
					Mutation.mutate({ name: 'zhangshan' });
				}}
			>
				增，删，改
			</Button>
		</div>
	);
};

export default Index;
