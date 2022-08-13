import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import getEnv from '@/config/getEnv';
// import { message } from 'antd';
// const baseURL = getEnv();
// const baseURL = 'http://localhost:3001/users';
type Result<T> = {
	code: number;
	// message: string;
	result: T;
};
class Request {
	// axiosをインスタンスする
	instance: AxiosInstance;
	// 基本的な構成、urlとタイムアウト時間
	baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 60000 };
	// baseConfig: AxiosRequestConfig = { baseURL, timeout: 60000 };
	// baseConfig: AxiosRequestConfig = { baseURL: 'http://localhost:3001', timeout: 60000 };

	constructor(config: AxiosRequestConfig) {
		// axios.createを利用しaxiosをインスタンスする
		this.instance = axios.create(Object.assign(this.baseConfig, config));

		this.instance.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				// 普通、LocalStorageからトークンを取得する
				// const token = localStorage.getItem("token");
				// console.log( config.headers , 'config')
				// config.headers["Authorization"] = 'token';

				return config;
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);

		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				// resを返却する。あるいはres.dataのみ返却するのも可能。
				return res.data;
			},
			(err: any) => {
				// HTTPエラーを処理し、メッセージを提示する。
				let errormessage = '';
				switch (err.response) {
					case 400:
						errormessage = 'パラメータが不正。(400)';
						break;
					case 401:
						errormessage = 'ログインしていない、もしくはログインタイムアウトしています。再登録してください。(401)';
						// Storageをクリアし、ログイン画面にRedirectする処理がここに実装。
						break;
					case 403:
						errormessage = '操作権限がありません。(403)';
						break;
					case 404:
						errormessage = 'リクエストエラー(404)';
						break;
					case 408:
						errormessage = 'リクエストタイムアウト(408)';
						break;
					case 500:
						errormessage = 'サーバーエラー(500)';
						break;
					case 501:
						errormessage = 'サービスが見つかりません(501)';
						break;
					case 502:
						errormessage = 'ネットワークエラー(502)';
						break;
					case 503:
						errormessage = 'サービス利用できません(503)';
						break;
					case 504:
						errormessage = 'ネットワークが混雑している(504)';
						break;
					case 505:
						errormessage = 'HTTPバージョンが古い、サポートされていません。(505)';
						break;
					default:
						errormessage = `システムエラーが発生しました。システム管理者にご連絡ください。(${err.response.status})!`;
				}
				// 上記エラーメッセージをポップアップで表示できる
				// 例えばelement plusがElMessageが利用できる
				// message.info(errormessage);
				// AxiosError型で返却するので、普通はレスポンスをrejectするだけでよい。
				// return Promise.reject(err.response);
				return Promise.reject(errormessage);
			}
		);
	}

	// リクエストメソッド定義
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config);
	}

	public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.get(url, config);
	}
	public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.post(url, data, config);
	}

	// public put<T = any>(
	//   url: string,
	//   data?: any,
	//   config?: AxiosRequestConfig
	// ): Promise<AxiosResponse<Result<T>>> {
	//   return this.instance.put(url, data, config);
	// }

	// public delete<T = any>(
	//   url: string,
	//   config?: AxiosRequestConfig
	// ): Promise<AxiosResponse<Result<T>>> {
	//   return this.instance.delete(url, config);
	// }
}

const Res = new Request({});
export default Res;
