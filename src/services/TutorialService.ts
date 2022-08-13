import axios from 'axios';
import Tutorial from '../types/Tutorial';

const apiClient = axios.create({
	// baseURL: "http://localhost:8080",
	headers: {
		'Content-type': 'application/json'
	}
});

const tableData = async (fundName: string) => {
	// const response = await apiClient.post<Tutorial[]>("/tutorials");
	const response = await apiClient.post('/api/searchFundByName', { fundName });
	console.log(response, 'response =============');
	return response.data;
};

const getUser = async () => {
	const response = await apiClient.get('http://localhost:3001/users');
	console.log(response, 'response =============');
	return response.data;
};

const postUser = async data => {
	const response = await apiClient.post('http://localhost:3001/users', data);
	console.log(response, 'response =============');
	return response.data;
};

const TutorialService = {
	tableData,
	getUser,
	postUser
};

export default TutorialService;
