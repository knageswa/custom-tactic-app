import axios from 'axios';  
import { TEST_ACTION } from './types';

const API_URL = 'http://localhost:5000/api'; 

export function testAction() {  
    return function(dispatch) {
      axios.get(`${API_URL}/helloworld`)
      .then(response => {
        dispatch({
          type: TEST_ACTION,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }