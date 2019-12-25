import Http from './http.js';
import HASH from "./hash.js";

class Api extends Http {
  // 登录
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
}

export default new Api()