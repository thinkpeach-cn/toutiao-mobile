//封装操作token的方法

//统一定义一个token的key
const MYTOKEN = 'toutiao-token'

//保存token
export function setToken(value) {
    //localStorage只能存储字符串
    //得到的value时一个对象
    //使用JSON.stringify将value对象转为字符串
    window.localStorage.setItem(MYTOKEN, JSON.stringify(value))
}

//获取token
export function getToken() {
    //由于存入的时字符转
    //取出时需要将字符串转为对象
    //这里的return一定要，需要给外界使用到token
    return JSON.parse(window.localStorage.getItem(MYTOKEN))
}

// 删除token
export function delToken() {
    window.localStorage.removeItem(MYTOKEN)
}