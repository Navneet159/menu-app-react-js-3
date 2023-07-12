import axios from 'axios'
import React from 'react'
import enviroment from '../model/enviroment'
export default class services extends enviroment {
    // 'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx'
    async PostMethod(url, data) {
        return await axios.post(this.baseUrl + url, data, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    // async PostMethodAuth(url, data) {
    //     return await axios.post(this.baseUrl + url, data, {
    //         headers: {
    //             'Content-type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx'
    //         }
    //     });
    // }

}
