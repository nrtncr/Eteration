import axios from 'axios'
import { serviceName } from '~/config/serviceNames';

export const getDataService = async () =>{
    const url = serviceName.getData
    const response = await axios.get(url);
    return response
}