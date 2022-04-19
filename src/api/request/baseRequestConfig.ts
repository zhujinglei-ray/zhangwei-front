export default class BaseRequest {
    baseURL: string;
    timeout: number;
    headers: any;

    constructor() {
        this.baseURL = 'http://localhost:8080'
        this.timeout = 15000
        this.headers = {'Content-Type':'application/json;charset=utf-8'}
    }
}