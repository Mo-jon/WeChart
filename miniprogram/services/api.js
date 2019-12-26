import Http from './http.js';
import HASH from "./hash.js";

class Api extends Http {
  /**
   * 登录
   * @param {账号} account 
   * @param {密码} password 
   */
  login(account, password) {
    console.log('login')
    return super.post({
        "name": account,
        "psw": HASH.hex_sha1(password)
      },
      null,
      'controller/login.php'
    );
  }

  /**
   * 获取商品类别
   */
  getCrops() {
    return super.get({
      controller: 'cropManage',
      command: 'manage',
    })
  }
}

export default new Api()