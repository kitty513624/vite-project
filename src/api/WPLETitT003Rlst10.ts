// import axios from '@/utils/axios';
import axios from '@/utils/axiosApi';
// 一覧表示
function fetchHomeList(params: { fundName: string }) {
  return axios.post('/searchFundByName', params);
}

// function fetchHomeList(data) {
// 	return axios.post('/searchFundByName', data);
// }

function getUser() {
  return axios.get('/users');
}

function postUser() {
  return axios.post('/users');
}

export { fetchHomeList, getUser, postUser };
