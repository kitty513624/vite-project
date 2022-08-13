import axios from '@/utils/axios';
// 一覧表示
function fetchHomeList(data: any) {
	return axios.post('/searchFundByName', data);
}

function getUser() {
	return axios.get('/users');
}

function postUser() {
	return axios.post('/users');
}

export { fetchHomeList, getUser, postUser };
