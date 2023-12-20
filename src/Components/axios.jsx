import axios from "axios";


let instance = axios.create({
baseURL:'http://127.0.0.1:10000',
});
export default instance;