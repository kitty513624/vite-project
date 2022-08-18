// import axios from '@/utils/axios';
import axios from '@/utils/axiosApi';
// 一覧表示
function fetchHomeList(params: { fundName: string }) {
  return axios.post('/searchFundByName', params);
}

// function fetchHomeList(data) {
// 	return axios.post('/searchFundByName', data);
// }

export { fetchHomeList };
