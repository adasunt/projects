import axios from 'axios'
import { Message } from 'element-ui';
const service = axios.create({
    baseURL: 'localhost:8080',
    timeout: 3000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
})
service.interceptors.response.use((response) => {
    const res = response.data

    if (res.code === 100) {
        Message({
            type: 'warning',
            message: res.message||"服务器未查询到数据",
            showClose: true,
            center: true
        })
        return Promise.reject(new Error('请求失败！'))
    } else if (res.code === 200) {
    
        return res
    }
}, (error) => {
    Message({
        type: 'erro',
        message: "服务器未响应",
        showClose: true,
        center: true
    })
    return Promise.reject(error);
})

export default service