class StorageService {
    constructor() {
        this.ls = window.localStorage;
        this.ss = window.sessionStorage;
    }
    /*-----------------localStorage---------------------*/
    /*设置localStorage*/
    setLocal(key, val) {
        let setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                this.ls.setItem(i, JSON.stringify(setting[i]));
            }
        }
        else {
            this.ls.setItem(key, JSON.stringify(val));
        }
    }
    /*获取localStorage*/
    getLocal(key) {
        if (key)
            return JSON.parse(`${this.ls.getItem(key)}`);
        return null;
    }
    /*移除localStorage*/
    removeLocal(key) {
        this.ls.removeItem(key);
    }
    /*移除所有localStorage*/
    clearLocal() {
        this.ls.clear();
    }
    /*-----------------sessionStorage---------------------*/
    /*设置sessionStorage*/
    setSession(key, val) {
        let setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                this.ss.setItem(i, JSON.stringify(setting[i]));
            }
        }
        else {
            this.ss.setItem(key, JSON.stringify(val));
        }
    }
    /*获取sessionStorage*/
    getSession(key) {
        if (key)
            return JSON.parse(`${this.ss.getItem(key)}`);
        return null;
    }
    /*移除sessionStorage*/
    removeSession(key) {
        this.ss.removeItem(key);
    }
    /*移除所有sessionStorage*/
    clearSession() {
        this.ss.clear();
    }
    /**
     * 设置cookie
     * @param cookie cookie的值
     */
    setCookie(cookie) {
        document.cookie = cookie;
    }
    /**
     * 站外环境设置悦跑cookie
     * @param uid 用户uid
     * @param sid 用户sid
     */
    setYpcookie(uid, sid) {
        const ypcookie = encodeURIComponent(`uid=${uid}&sid=${sid}`);
        this.setCookie(`ypcookie=${ypcookie}`);
    }
}
export default StorageService;
