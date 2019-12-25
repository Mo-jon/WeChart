class LocalStorage {
  // 构造函数
  constructor() {
    let user = wx.getStorageSync("user");
    let location = wx.getStorageSync("location");

    // 未登录(user==null)
    this.user = user ? JSON.parse(user.toString()) : null;
    console.log("localStorage-->user", this.user);

    // 缓存地址
    this.location = location ? JSON.parse(location.toString()) : null;
    console.log("localStorage-->location", this.location);
  }

  /**
   * 登录
   * @param {存入数据} user 
   */
  login(user) {
    return new Promise((resolve, reject) => {
      this.set("user", user).then(() => {
        resolve();
      }).catch(() => {
        reject();
      })
    })
  }

  /**
   * 登出
   */
  logout() {
    return new Promise((resolve, reject) => {
      this.remove("user").then(() => {
        resolve();
      }).catch(() => {
        reject();
      })
    })
  }

  /**
   * 存储数据
   * @param {存储名称} storageName 
   * @param {json存储值} jsonObject 
   */
  set(storageName, jsonObject) {
    return new Promise((resolve, reject) => {
      try {
        wx.setStorageSync(
          storageName.toString(),
          JSON.stringify(jsonObject)
        )
        console.log('[storage-set] success');
        resolve();
      } catch (error) {
        console.error('[storage-set]', error);
        reject();
      }
    })
  }

  /**
   * 获取数据
   * @param {获取名称} storageName 
   */
  get(storageName) {
    return new Promise((resolve, reject) => {
      try {
        wx.getStorage({
          key: storageName.toString(),
          success(res) {
            resolve(JSON.parse(res.data));
          }
        })
      } catch (error) {
        console.error('[storage-get]', error);
        reject();
      }
    })
  }

  /**
   * 清除数据
   * @param {删除名称} storageName 
   */
  remove(storageName) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(storageName);
        resolve();
      } catch (error) {
        console.error('[storage-remove]', error);
        reject();
      }
    })
  }
}

export default new LocalStorage();