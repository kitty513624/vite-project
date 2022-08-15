import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type Result<T> = {
  code: number;
  message: string;
  result: T;
};

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存/...当中
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 普通、LocalStorageからトークンを取得する
        // const token = localStorage.getItem("token");
        // console.log( config.headers , 'config')
        // config.headers["Authorization"] = 'token';
        // const token: string = store.getState().global.token;
        return config;
        // return { ...config, headers: { ...config.headers, 'x-access-token': token } };
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (res: AxiosResponse) => {
        // resを返却する。あるいはres.dataのみ返却するのも可能。
        return res.data;
      },
      (err: AxiosError) => {
        const { response } = err;
        // HTTPエラーを処理し、メッセージを提示する。
        console.log(err, 'err-------------');
        let errormessage = '';
        switch (response?.status) {
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
  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<AxiosResponse<Result<T>>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<AxiosResponse<Result<T>>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequestHttp(config);
