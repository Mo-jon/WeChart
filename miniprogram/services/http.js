import Storage from "./storage";

class Http {
  constructor() {
    console.log('http')
    this.base = 'http://localhost:8888/TianDiTuAPI/'; //本地
    this.base = 'https://36idea.cn/TianDiTuAPI/'; //正式
    this.defaultPath = 'API.php';
  }

  /**
   * get请求
   * @param params url参数
   * @param url url路径
   */
  get(params, url) {
    return new Promise((resolve, reject) => {
      try {
        console.log('get')
        const path = url ? url : this.defaultPath;
        wx.request({
          url: this.base + path,
          data: params,
          method: 'GET',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            "Token": Storage.user ? Storage.user.token : ''
          },
          success(res) {
            console.log(res.data)
            resolve(res.data)
          }
        })
      } catch (error) {
        console.error('[Http]', error)
        reject(error)
      }
    })
  }

  /**
   * post请求
   * @param data body参数
   * @param params url参数
   * @param url url路径
   */
  post(data, params, url) {
    return new Promise((resolve, reject) => {
      try {
        console.log('get')
        let param = [];
        for (let key in params) {
          if (params[key] !== undefined) {
            param.push(`${key}=${params[key]}`);
          }
        }
        param = params ? '?' + param.join('&') : '';
        const path = url ? url + param : this.defaultPath + param;
        wx.request({
          url: this.base + path,
          data: data,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            "Token": Storage.user ? Storage.user.token : ''
          },
          success(res) {
            console.log(res.data)
            resolve(res.data)
          }
        })
      } catch (error) {
        console.error('[Http]', error)
        reject(error)
      }
    })
  }
}

export default Http;